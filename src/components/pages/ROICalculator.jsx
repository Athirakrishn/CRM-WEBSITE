"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Calculator, Clock, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

// Helper component for animated counting
const AnimatedCounter = ({ targetValue, prefix = "", suffix = "" }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1000;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCurrentValue(Math.floor(easeProgress * (targetValue - startValue) + startValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue]);

  return (
    <span>
      {prefix}
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  );
};

function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(1500);

  const adminHoursSavedWeekly = teamSize * 4;
  const hoursSavedYearly = adminHoursSavedWeekly * 52;
  const monetarySavingsYearly = hoursSavedYearly * hourlyRate;
  const monetarySavingsMonthly = Math.round(monetarySavingsYearly / 12);
  const hoursSavedMonthly = Math.round(hoursSavedYearly / 12);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator-inputs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111315] font-sans text-[#F4F0EB] flex flex-col relative overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange rounded-full blur-[180px] opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pt-12 lg:pt-20 pb-0 px-4 sm:px-12 md:px-16 xl:px-24">
          <div className="max-w-[1280px] mx-auto">

            {/* Hero Section */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-16 mb-24 relative">

              {/* Left Content */}
              <div className="w-full xl:w-[45%] z-10">
                <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  <Calculator size={16} className="text-brand-orange" />
                  <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">ROI Calculator</span>
                </div>

                <h2 className="text-5xl md:text-[4.5rem] font-sans font-bold mb-8 text-white leading-[1.1] tracking-tight">
                  <span>
                    Estimate Your<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff844a]">Savings</span>
                  </span>  </h2>
                <h1><span className="block text-xl md:text-2xl mt-6 text-gray-300 font-light tracking-wide border-t border-white/10 pt-6 max-w-lg">
                  — Best CRM Platforms in Calicut
                </span></h1>


                <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-lg">
                  Calculate how much time and money your agency can save by switching to Lumeo, one of the best CRM platforms in Calicut.
                </p>

                {/* 3 Small Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                  <div className="bg-[#1a1d21] border border-white/5 p-5 rounded-2xl flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Clock size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-gray-200 mb-1">Save Time</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed">Automate repetitive tasks and focus on what matters.</p>
                    </div>
                  </div>
                  <div className="bg-[#1a1d21] border border-white/5 p-5 rounded-2xl flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <DollarSign size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-gray-200 mb-1">Cut Costs</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed">Reduce operational costs and increase profitability.</p>
                    </div>
                  </div>
                  <div className="bg-[#1a1d21] border border-white/5 p-5 rounded-2xl flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-gray-200 mb-1">Grow Faster</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed">Reinvest your savings into growth and innovation.</p>
                    </div>
                  </div>
                </div>

                <button suppressHydrationWarning onClick={scrollToCalculator} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange to-[#ff844a] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,90,42,0.4)]">
                  Calculate My Savings <ArrowRight size={20} />
                </button>
              </div>

              {/* Right Content - Image and Floating Calculator Output */}
              <div className="w-full xl:w-[55%] relative mt-12 xl:mt-0">
                {/* Main Image Container */}
                <div className="relative rounded-[2rem] overflow-hidden border border-brand-orange/20 shadow-2xl aspect-[4/3] xl:aspect-auto xl:h-[650px] w-full max-w-[800px] ml-auto">
                  <img src="/images/crm-dashboard.webp" alt="best-business-crm-in-kerala" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Floating Output Card */}
                <div className="absolute -bottom-8 right-0 md:right-8 xl:top-1/2 xl:-translate-y-1/2 xl:-right-10 w-[90%] sm:w-[420px] bg-[#161a1d]/90 backdrop-blur-xl border border-brand-orange/20 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                  <h3 className="text-lg font-bold text-gray-300 mb-6 border-b border-white/10 pb-4">Your Potential Savings</h3>

                  <div className="mb-8 border-b border-white/5 pb-6">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Yearly Savings</p>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl sm:text-[2.75rem] font-bold text-brand-orange font-sans tracking-tight">
                        <AnimatedCounter targetValue={monetarySavingsYearly} prefix="$" />
                      </div>
                      <div className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs px-2.5 py-1 rounded-full font-bold">+35%</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-1 font-medium">Monthly Savings</p>
                    <div className="text-2xl font-bold text-brand-orange/80 tracking-tight">
                      <AnimatedCounter targetValue={monetarySavingsMonthly} prefix="$" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <Clock size={16} />
                    <span><AnimatedCounter targetValue={hoursSavedMonthly} /> hrs / month Time Saved</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Inputs Section */}
            <div id="calculator-inputs" className="max-w-4xl mx-auto bg-[#1a1d21] rounded-3xl p-10 lg:p-12 border border-white/5 shadow-2xl relative overflow-hidden mt-32 mb-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <h3 className="text-3xl font-bold mb-10 text-white font-sans text-center">Adjust Your Agency Metrics</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Team Size Slider */}
                <div className="group relative z-10">
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-bold text-gray-400 text-lg">Team Size</label>
                    <span className="font-bold text-2xl text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-xl border border-brand-orange/20">{teamSize}</span>
                  </div>
                  <input suppressHydrationWarning
                    type="range"
                    min="1" max="100"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full h-3 bg-[#2a2e33] rounded-lg appearance-none cursor-pointer accent-brand-orange hover:bg-[#343a40] transition-colors"
                  />
                </div>

                {/* Hourly Rate Slider */}
                <div className="group relative z-10">
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-bold text-gray-400 text-lg">Avg. Hourly Rate</label>
                    <span className="font-bold text-2xl text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-xl border border-brand-orange/20">${Number(hourlyRate).toLocaleString()}</span>
                  </div>
                  <input suppressHydrationWarning
                    type="range"
                    min="10" max="500" step="10"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="w-full h-3 bg-[#2a2e33] rounded-lg appearance-none cursor-pointer accent-brand-orange hover:bg-[#343a40] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Classy Image Gallery Section */}
            <div className="mt-32 mb-20 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Built for <span className="text-brand-orange">Modern</span> Agencies</h2>
                <p className="text-gray-400 text-lg">Experience a workspace built with the best CRM software available — designed for efficiency, clarity, and exponential growth for agencies across Calicut.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Gallery Card 1 */}
                <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="/images/business-dashboard-performance.webp" alt="Best-CRM-software" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h4 className="text-2xl font-bold text-white mb-2 font-serif">Data Clarity</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Turn complex agency metrics into beautiful, actionable insights instantly.</p>
                  </div>
                </div>

                {/* Gallery Card 2 */}
                <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="/images/team-discussion.webp" alt="Best-RM-platforms-in-Calicut" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h4 className="text-2xl font-bold text-white mb-2 font-serif">Team Alignment</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Bring your entire agency together around a single source of truth.</p>
                  </div>
                </div>

                {/* Gallery Card 3 */}
                <div className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="/images/team-discussion-crm-marketing.webp" alt="Best-CRM-software" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h4 className="text-2xl font-bold text-white mb-2 font-serif">Workflow Mastery</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Automate the busywork so your team can focus on creative excellence.</p>
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

export default ROICalculator;
