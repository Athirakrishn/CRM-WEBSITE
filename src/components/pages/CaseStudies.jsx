"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

function CaseStudies() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Customer Success Stories';

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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#F4F0EB] min-h-[1.2em]">
                
                {typedText}
                
                </h1>
              <h2 className="text-xl text-gray-400 leading-relaxed font-normal">
                Learn how leading agencies are using Lumeo, a trusted CRM software company in Calicut, to unify their operations, save time, and boost their bottom line.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              {[
                {
                  company: "CreativeDigital",
                  metric: "+45%",
                  metricText: "Increase in Billable Hours",
                  quote: "Lumeo completely transformed how we track our team's time with this reliable business CRM system. The frictionless sync means no more chasing developers on Friday afternoons.",
                  author: "Sarah Jenkins, COO",
                  metricColor: "text-brand-orange"
                },
                {
                  company: "TechStart Agency",
                  metric: "20hrs",
                  metricText: "Saved in Admin Per Week",
                  quote: "The automated invoice drafting alone has saved our finance team days of work. It just works seamlessly with our pipeline — the best CRM software company in Calicut we've worked with.",
                  author: "David Lee, Founder",
                  metricColor: "text-emerald-400"
                },
                {
                  company: "Global Co Branding",
                  metric: "3x",
                  metricText: "Faster Proposal to Close",
                  quote: "Having our proposals, CRM, and task management in one unified OS has drastically reduced the friction in our sales process.",
                  author: "Amanda Torres, Head of Sales",
                  metricColor: "text-blue-400"
                },
                {
                  company: "Retail Plus Consult",
                  metric: "-15%",
                  metricText: "Reduction in Overhead",
                  quote: "By categorizing operational expenses automatically, we finally have an accurate picture of our true profitability per project — thanks to the best CRM in Kerala for growing agencies.",
                  author: "James Wilson, CFO",
                  metricColor: "text-purple-400"
                }
              ].map((study, idx) => (
                <div key={idx} className="bg-[#241d1a] p-10 rounded-2xl border border-[#382d28] relative overflow-hidden transition-transform hover:-translate-y-2 shadow-2xl">
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <div className="mb-8">
                    <div className={`text-5xl font-bold font-serif mb-2 ${study.metricColor}`}>{study.metric}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-gray-400">{study.metricText}</div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 italic">"{study.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-[#F4F0EB]">{study.author}</div>
                    <div className="text-sm font-mono text-gray-400 bg-black/40 px-3 py-1 rounded border border-[#382d28]">{study.company}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner matched to dark theme */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#14100F] border border-[#2A2220] p-12 md:p-20 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] group">
              {/* Restored Background Image with professional blend */}
              <div className="absolute inset-0 opacity-10 mix-blend-luminosity grayscale pointer-events-none transition-opacity duration-700 group-hover:opacity-15">
                <Image src="/images/marketing-growth.webp" alt="marketing growth" fill className="object-cover object-center" />
              </div>

              {/* Elegant ambient glows */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4 transition-opacity duration-700 group-hover:opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E04B1E]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4 transition-opacity duration-700 group-hover:opacity-70"></div>

              <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-[#F4F0EB] leading-tight tracking-tight">
                  Ready to Write Your Success Story with the Best CRM Software Company in Calicut?
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl font-light">
                  Join hundreds of agencies across Kerala who are already growing with Lumeo—the CRM software company in Calicut trusted by growing businesses.
                </p>
                <a href="https://lumeo.estgrp.in/" target="_blank" rel="noopener noreferrer" className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 shadow-[0_0_40px_rgba(255,90,42,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] inline-flex items-center gap-3">
                  Start Free Trial <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default CaseStudies;
