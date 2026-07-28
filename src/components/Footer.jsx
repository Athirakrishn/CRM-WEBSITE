"use client";
import React from 'react';
import Link from 'next/link';

import { Mail, Phone, Building, ShieldCheck, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-[#E0E0E0] py-16 px-8 font-sans border-t border-[#111111]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand & Description Column */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 pr-4">
          <Link href="/" className="flex items-center gap-3 mb-6 block">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto brightness-0 invert" />
          </Link>
          <p className="text-sm leading-relaxed mb-8 text-[#999999] max-w-sm">
            A premium CRM workspace designed for teams who close the whole quarter. Seamlessly manage your leads, deals, customers, tasks, and notes in one unified hub.
          </p>
        </div>

        {/* Explore Platform Column */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <h4 className="font-bold text-xs tracking-widest text-[#777777] uppercase mb-6">Explore Platform</h4>
          <ul className="space-y-4 text-sm text-[#AAAAAA]">
            <li><Link href="/sandbox" className="hover:text-brand-orange transition-colors">Interactive Sandbox Walkthrough</Link></li>
            <li><Link href="/workflow-redesign" className="hover:text-brand-orange transition-colors">Diagnostic Workflow Check</Link></li>
            <li><Link href="/case-studies" className="hover:text-brand-orange transition-colors">Customer Case Studies</Link></li>
            <li><Link href="/roi-calculator" className="hover:text-brand-orange transition-colors">Sales Savings Calculator (ROI)</Link></li>
            <li><Link href="/faq" className="hover:text-brand-orange transition-colors">F.A.Q.</Link></li>
          </ul>
        </div>

        {/* Features Suite Column */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <h4 className="font-bold text-xs tracking-widest text-[#777777] uppercase mb-6">Features Suite</h4>
          <ul className="space-y-4 text-sm text-[#AAAAAA]">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
              <Link href="#" className="hover:text-brand-orange transition-colors">Visual Lead Pipelines</Link>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
              <Link href="#" className="hover:text-brand-orange transition-colors">Customer Relationship Hub</Link>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
              <Link href="#" className="hover:text-brand-orange transition-colors">Task & Note Management</Link>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
              <Link href="#" className="hover:text-brand-orange transition-colors">Deal Pipeline Analytics</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Support Column */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3">
          <h4 className="font-bold text-xs tracking-widest text-[#777777] uppercase mb-6">Contact & Support</h4>
          <ul className="space-y-4 text-sm text-[#AAAAAA]">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
              <a href="mailto:support@estgrp.in" className="hover:text-brand-orange transition-colors">support@estgrp.in</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span>+91 9207557565</span>
                <span>0496 2960005</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Building className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
              <span className="leading-relaxed"> Kerala ,
                INDIA</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-[#333333] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#666666]">
        <p>&copy; 2026 Lumeo. All rights reserved. Built for RTS Solutions & high-growth sales teams.</p>
      </div>
    </footer>
  );
}
export default Footer;
