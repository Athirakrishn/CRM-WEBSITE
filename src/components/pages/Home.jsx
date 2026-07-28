"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SandboxDashboard from '../SandboxDashboard';
import FAQSection from '../FAQSection';
import { CheckCircle2, Play, ArrowRight, BarChart3, Clock, Receipt, Shield, Users } from 'lucide-react';

const AnimatedNumber = ({ value, isVisible, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    const end = parseInt(value, 10);
    if (end === 0) {
      setCount(0);
      return;
    }
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      // Use easeOutQuint for smoother decerelation
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 5);
      setCount(Math.floor(easeOutProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, isVisible, duration]);

  return <>{count}{suffix}</>;
};

const OrbitalFeatures = () => {
  const originalFeatures = [
    { icon: <BarChart3 className="w-6 h-6 text-[#6B4CE6]" />, title: "Pipeline Management", desc: "Track deals from proposal to closed-won with our intuitive drag-and-drop kanban boards.", borderColor: "border-[#D4CBFF]", iconBg: "bg-[#F3F0FF]", y: 80, align: 'left', path: "M 350 140 C 450 140, 450 350, 550 350", dotY: 140, dotX: 350 },
    { icon: <CheckCircle2 className="w-6 h-6 text-brand-orange" />, title: "Notes & History", desc: "Log call notes, emails, and internal memos directly on customer profiles for full context.", borderColor: "border-[#FFD3C2]", iconBg: "bg-[#FFF5F0]", y: 290, align: 'left', path: "M 350 350 L 550 350", dotY: 350, dotX: 350 },
    { icon: <Users className="w-6 h-6 text-[#008DD5]" />, title: "Customer Hub", desc: "Keep all your customer interactions, history, and contact details organized and accessible.", borderColor: "border-[#C2E9FF]", iconBg: "bg-[#F0FAFF]", y: 500, align: 'left', path: "M 350 560 C 450 560, 450 350, 550 350", dotY: 560, dotX: 350 },

    { icon: <Clock className="w-6 h-6 text-[#008DD5]" />, title: "Task Management", desc: "Never miss a follow-up. Integrated tasks ensure you always know what to do next.", borderColor: "border-[#C2E9FF]", iconBg: "bg-[#F0FAFF]", y: 80, align: 'right', path: "M 750 140 C 650 140, 650 350, 550 350", dotY: 140, dotX: 750 },
    { icon: <Receipt className="w-6 h-6 text-brand-orange" />, title: "Deal Tracking", desc: "Stay on top of active deals, forecast revenue, and identify bottlenecks in your sales process.", borderColor: "border-[#FFD3C2]", iconBg: "bg-[#FFF5F0]", y: 290, align: 'right', path: "M 750 350 L 550 350", dotY: 350, dotX: 750 },
    { icon: <Shield className="w-6 h-6 text-[#6B4CE6]" />, title: "Secure Data", desc: "Enterprise-grade security ensures your lead and customer data is always protected.", borderColor: "border-[#D4CBFF]", iconBg: "bg-[#F3F0FF]", y: 500, align: 'right', path: "M 750 560 C 650 560, 650 350, 550 350", dotY: 560, dotX: 750 }
  ];

  return (
    <div className="w-full my-8">
      {/* Desktop Layout (Hub and Spoke) */}
      <div className="relative w-full max-w-[1100px] h-[700px] mx-auto hidden xl:block">

        {/* Connecting SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1100 700">
          {originalFeatures.map((feat, idx) => (
            <g key={idx}>
              <path d={feat.path} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6 6" fill="none" className="animate-dash-flow" />
              <circle cx={feat.dotX} cy={feat.dotY} r="4" fill="#94A3B8" />
            </g>
          ))}
        </svg>

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white to-[#F0FAFF] rounded-full shadow-[0_0_80px_rgba(0,141,213,0.15)] flex flex-col items-center justify-center border-[12px] border-white z-20 animate-pulse">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-[#008DD5] to-brand-orange font-serif font-bold text-4xl text-center leading-tight">Lumeo<br />Core</h3>
        </div>

        {/* Floating Cards */}
        {originalFeatures.map((feat, idx) => (
          <div
            key={idx}
            className={`absolute w-[350px] ${feat.iconBg} rounded-2xl p-5 shadow-xl border ${feat.borderColor} flex gap-4 items-start z-10 hover:shadow-2xl cursor-pointer animate-float-card`}
            style={{
              top: `${feat.y}px`,
              left: feat.align === 'left' ? '0px' : 'auto',
              right: feat.align === 'right' ? '0px' : 'auto',
              animationDelay: `${idx * 0.7}s`
            }}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-white shadow-sm border ${feat.borderColor}`}>
              {feat.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-snug">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout (Grid fallback) */}
      <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {originalFeatures.map((feat, idx) => (
          <div key={idx} className={`${feat.iconBg} rounded-2xl p-6 shadow-md border ${feat.borderColor} flex gap-4 items-start`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white shadow-sm border ${feat.borderColor}`}>
              {feat.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{feat.title}</h3>
              <p className="text-sm text-gray-500 leading-snug">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Built to Grow.';
  const [isGrowSectionVisible, setIsGrowSectionVisible] = useState(false);
  const growSectionRef = useRef(null);
  const [isFeaturesSectionVisible, setIsFeaturesSectionVisible] = useState(false);
  const featuresSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGrowSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const featuresObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFeaturesSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (growSectionRef.current) {
      observer.observe(growSectionRef.current);
    }
    if (featuresSectionRef.current) {
      featuresObserver.observe(featuresSectionRef.current);
    }

    return () => {
      if (growSectionRef.current) observer.unobserve(growSectionRef.current);
      if (featuresSectionRef.current) featuresObserver.unobserve(featuresSectionRef.current);
    };
  }, []);

  useEffect(() => {
    let currentText = '';
    let i = 0;

    const interval = setInterval(() => {
      currentText += fullText[i];
      setTypedText(currentText);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const renderTypedText = () => {
    if (typedText.length <= 9) {
      return typedText;
    }
    const firstPart = typedText.slice(0, 9);
    const secondPart = typedText.slice(9);
    return (
      <>
        {firstPart}<span className="text-[#E04B1E]">{secondPart}</span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-transparent font-sans text-brand-dark overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-[#1A1513] overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E04B1E] rounded-full blur-[150px] opacity-25 -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 pt-20 pb-20 md:pt-32 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <div className="text-[#E04B1E] text-xs font-bold tracking-[0.15em] uppercase">
              <h1>Best CRM Software in Kerala</h1>
            </div>

        
{/* SEO Hidden Heading */}
<h2 className="sr-only">Built to Grow.</h2>
<h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold tracking-tight leading-[1.05] text-[#F4F0EB]">
  {renderTypedText()}
</h2>


         

 <p className="text-lg text-gray-400 leading-relaxed max-w-xl pt-4">
   Looking for the best CRM software in Kerala? Our premium CRM software Kerala businesses trust helps you keep track of your <span className="font-semibold text-gray-200">leads, deals, customers,</span> tasks and notes all in one place. Avoid the friction and stay in complete control of your sales pipeline.
</p>





            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Comprehensive Lead Tracking
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Deal Pipeline Management
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Customer Relationship Hub
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Integrated Task & Note Management
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a href="https://lumeo.estgrp.in/" target="_blank" rel="noopener noreferrer" className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo-section" className="px-8 py-4 rounded-lg font-bold text-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" /> Watch Demo
              </a>
            </div>
          </div>

          {/* Mockup Card Graphic */}
          <div className="relative z-10 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-peach to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
              {/* Browser Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>

              </div>
              {/* Card Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Active Deal Pipeline</div>
                    <h3 className="text-2xl font-serif font-bold">Acme Corp</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-xs font-bold border border-emerald-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    Q3 CLOSING
                  </div>
                </div>

                <div className="border border-gray-100 rounded-xl p-6 mb-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Pipeline Value (Rupees)</div>
                    <div className="text-[10px] font-bold text-gray-400">1 OPEN</div>
                  </div>
                  <h2 className="text-4xl font-serif font-bold mb-4">₹15,000</h2>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-orange h-full w-3/4 rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-medium text-gray-500 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    Follow-up call scheduled
                  </div>
                  <div className="uppercase font-mono text-[10px]">NOTE ADDED TODAY</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#f4e8ce] px-6 py-4 rounded-xl shadow-xl border border-[#e5d4b3] transform -rotate-3 z-20">
              <div className="font-serif font-bold text-lg text-brand-dark">Consolidated</div>
              <div className="text-[10px] font-bold tracking-widest text-[#a68c5b] uppercase mt-1">No Excel Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grow with Lumeo Section */}
      <section className="pt-20 md:pt-32 pb-10 bg-white text-gray-900 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E04B1E] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-8">

          {/* Left: Heading and Arrow */}
          <div className="w-full lg:w-1/3 text-center lg:text-left mb-0 lg:mb-16">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 text-gray-900 leading-[1.1]"
            >
              Grow <br className="hidden lg:block" />with Lumeo
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
              Powerful features built into a premium CRM software Kerala businesses rely on — designed to help your team scale faster.
            </p>
            {/* Hand drawn arrow (SVG) */}
            <div className="hidden lg:block w-32 h-32 opacity-70 ml-16 mt-4">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
                <path d="M10 10 C 20 60, 40 80, 90 90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-gray-500" />
                <path d="M75 80 L 90 90 L 80 100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500" />
              </svg>
            </div>
          </div>

          {/* Right: Arches */}
          <div ref={growSectionRef} className="w-full lg:w-2/3 flex flex-col md:flex-row items-start md:items-end justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 h-auto md:h-[450px]">
            {/* Arch 1 (Purple hue) */}
            <div className={`${isGrowSectionVisible ? 'animate-arch-grow' : 'arch-hidden'} w-[70%] md:w-48 bg-[#E6E1FF] border border-[#D4CBFF] rounded-r-[100px] rounded-l-none md:rounded-r-2xl md:rounded-t-[100px] md:rounded-b-2xl flex flex-col items-center justify-center md:justify-start text-center p-6 h-[160px] md:h-[300px] shadow-2xl relative self-start md:self-auto`}>
              <div className="mt-0 md:mt-12">
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#6B4CE6] mb-2">
                  <AnimatedNumber value={14} isVisible={isGrowSectionVisible} suffix="d" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-[#2D2442] mb-1 md:mb-2 leading-tight">free trial</h4>
                <p className="text-[10px] md:text-[11px] text-[#4A3D6B] uppercase tracking-wider font-bold">Premium Features</p>
              </div>
            </div>

            {/* Arch 2 (Cyan hue) */}
            <div className={`${isGrowSectionVisible ? 'animate-arch-grow' : 'arch-hidden'} w-[85%] md:w-56 bg-[#E1F5FF] border border-[#C2E9FF] rounded-r-[100px] rounded-l-none md:rounded-r-2xl md:rounded-t-[100px] md:rounded-b-2xl flex flex-col items-center justify-center md:justify-start text-center p-6 h-[180px] md:h-[360px] shadow-2xl relative self-start md:self-auto`} style={{ animationDelay: '0.15s' }}>
              <div className="mt-0 md:mt-16">
                <div className="text-5xl md:text-6xl font-serif font-bold text-[#008DD5] mb-2">
                  <AnimatedNumber value={0} isVisible={isGrowSectionVisible} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#153448] mb-1 md:mb-2 leading-tight">credit card required</h4>
                <p className="text-[11px] md:text-xs text-[#2A5C7A] font-medium">Get started instantly</p>
              </div>
            </div>

            {/* Arch 3 (Peach/Orange hue) */}
            <div className={`${isGrowSectionVisible ? 'animate-arch-grow' : 'arch-hidden'} w-full md:w-64 bg-[#FFE9E1] border border-[#FFD3C2] rounded-r-[120px] rounded-l-none md:rounded-r-2xl md:rounded-t-[120px] md:rounded-b-2xl flex flex-col items-center justify-center md:justify-start text-center p-6 md:p-8 h-[220px] md:h-[440px] shadow-2xl relative self-start md:self-auto`} style={{ animationDelay: '0.3s' }}>
              <div className="mt-0 md:mt-16">
                <div className="text-6xl md:text-7xl font-serif font-bold text-brand-orange mb-2 md:mb-3">
                  <AnimatedNumber value={5} isVisible={isGrowSectionVisible} />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#4A2615] mb-2 md:mb-3 leading-tight">core CRM modules</h4>
                <p className="text-[11px] md:text-sm text-[#8B4827] font-medium">Everything in one place</p>
              </div>
              <div className="hidden md:flex absolute bottom-8 bg-white border border-[#FFD3C2] rounded-full px-4 py-2 items-center gap-2 shadow-xl whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-[#4A2615]">Ready to scale</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Video Demos Placeholder Section */}
      <section id="demo-section" className="py-10 md:py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold mb-4">See Lumeo in action</h2>
              <p className="text-gray-400 text-lg">See how leading agencies in Kerala are streamlining their whole operations with our CRM software.</p>
            </div>
            <button suppressHydrationWarning className="mt-6 md:mt-0 px-6 py-2 rounded-md font-medium text-sm text-white border border-gray-600 hover:bg-gray-800 transition-colors">
              View All Tutorials
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-2xl overflow-hidden bg-gray-800 aspect-video cursor-pointer border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(242,97,63,0.5)]">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="text-brand-orange text-sm font-bold tracking-widest uppercase mb-2">Deal Progression</div>
                <h3 className="text-2xl font-serif font-bold">Managing Your Deal Pipeline</h3>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden bg-gray-800 aspect-video cursor-pointer border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-brand-dark ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="text-gray-300 text-sm font-bold tracking-widest uppercase mb-2">Customer Hub</div>
                <h3 className="text-2xl font-serif font-bold">Organizing Notes & Tasks</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSectionRef} className="bg-white relative overflow-hidden pt-10 md:pt-16 pb-4 md:pb-6 border-t border-gray-100">

        {/* Ambient Color Composition */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Orange shade */}
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] mix-blend-multiply"></div>
          {/* Purple shade */}
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#6B4CE6]/10 rounded-full blur-[100px] mix-blend-multiply"></div>
          {/* Blue shade */}
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[500px] bg-[#008DD5]/10 rounded-full blur-[120px] mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Everything You Need to Scale with the Best CRM Software in Kerala</h2>
            <p className="text-lg text-gray-600">The top CRM software in Kerala has powerful capabilities and was created especially for high-growth teams trying to maximize sales operations.</p>
          </div>

          <div className="mt-8 md:mt-12">
            <OrbitalFeatures />
          </div>
        </div>
      </section>

      {/* Interactive Sandbox Section */}
      <section className="pb-10 md:pb-24 pt-4 md:pt-6 bg-gray-150 relative">
        <div className="relative z-10">
          <SandboxDashboard />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="bg-[#0A2E2C] py-10 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">Get your free CRM today</h2>
            <p className="text-lg text-[#E0EAE9] mb-8 max-w-lg leading-relaxed font-sans">
              Make your customer data one and the same today with the easiest CRM software in Kerala – the easiest, AI-powered CRM software, capable of working as hard as you.
            </p>
            <a href="https://lumeo.estgrp.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FF5A2A] hover:bg-[#E04B1E] text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg">
              Get free CRM
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#FF5A2A] rounded-3xl transform rotate-[6deg] scale-105 -z-10 translate-x-4 translate-y-4"></div>
              <img src="/images/a-girl-sitting-on-a-window-side.webp" alt="Best-CRM-software-in-Kerala-get-your-free-CRM" className="w-full aspect-[4/3] rounded-3xl shadow-2xl object-cover object-[center_20%] relative z-10" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
