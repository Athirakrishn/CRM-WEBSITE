"use client";
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SandboxDashboard from '../SandboxDashboard';

function InteractiveSandbox() {
  return (
    <div className="min-h-screen bg-[#1A1513] font-sans text-[#F4F0EB] flex flex-col relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E04B1E] rounded-full blur-[150px] opacity-25 -translate-y-1/3 translate-x-1/4 pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
      
      <main className="flex-grow pt-8 pb-24 px-8">
        <SandboxDashboard titleColor="text-white" />
        <div className="max-w-7xl mx-auto mt-12 text-center">
          <a href="https://lumeo.estgrp.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg gap-2">
            Start Free Trial
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}

export default InteractiveSandbox;
