"use client";
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


function Contact() {
  return (
    <div className="min-h-screen bg-[#1A1513] font-sans text-[#F4F0EB] flex flex-col relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E04B1E] rounded-full blur-[150px] opacity-25 -translate-y-1/3 translate-x-1/4 pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 text-center">
          <h2 className="text-6xl font-serif font-bold mb-4 text-[#F4F0EB]">Contact Us</h2>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange">Contact</span>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-grow pb-24 px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column - Contact Form */}
            <div className="w-full lg:w-5/12">
              <div className="bg-[#241d1a] p-10 md:p-12 rounded-3xl shadow-2xl border border-[#382d28]">
                <h3 className="text-brand-orange font-bold tracking-[0.15em] uppercase text-xs mb-2">Contact Us</h3>
                <h2 className="text-4xl font-serif font-bold mb-10 text-[#F4F0EB]">Get In Touch</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input suppressHydrationWarning 
                      type="text" 
                      className="w-full px-4 py-3 border-b-2 border-[#382d28] focus:border-brand-orange outline-none transition-colors bg-transparent placeholder-gray-600 text-[#F4F0EB]"
                      placeholder="Your Name..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input suppressHydrationWarning 
                      type="email" 
                      className="w-full px-4 py-3 border-b-2 border-[#382d28] focus:border-brand-orange outline-none transition-colors bg-transparent placeholder-gray-600 text-[#F4F0EB]"
                      placeholder="example@yourmail.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input suppressHydrationWarning 
                      type="text" 
                      className="w-full px-4 py-3 border-b-2 border-[#382d28] focus:border-brand-orange outline-none transition-colors bg-transparent placeholder-gray-600 text-[#F4F0EB]"
                      placeholder="Title..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 border-b-2 border-[#382d28] focus:border-brand-orange outline-none transition-colors bg-transparent placeholder-gray-600 text-[#F4F0EB] resize-none"
                      placeholder="Type Here..."
                    ></textarea>
                  </div>
                  
                  <button suppressHydrationWarning className="w-full border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-4 rounded-full transition-colors mt-8">
                    Send Now
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              
              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-16">
                
                <div className="flex flex-col items-start md:items-center text-left md:text-center group">
                  <div className="w-14 h-14 bg-[#241d1a] border border-[#382d28] rounded-full flex items-center justify-center text-gray-400 group-hover:text-brand-orange group-hover:border-brand-orange transition-all mb-4 shadow-sm">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-lg mb-1 text-[#F4F0EB]">Phone Number</h4>
                  <p className="text-gray-400">+91 9207557565</p>
                  <p className="text-gray-400">0496 2960005</p>
                </div>

                <div className="flex flex-col items-start md:items-center text-left md:text-center group">
                  <div className="w-14 h-14 bg-[#241d1a] border border-[#382d28] rounded-full flex items-center justify-center text-gray-400 group-hover:text-brand-orange group-hover:border-brand-orange transition-all mb-4 shadow-sm">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-lg mb-1 text-[#F4F0EB]">Email Address</h4>
                  <a href="mailto:support@estgrp.in" className="text-gray-400 hover:text-brand-orange transition-colors">support@estgrp.in</a>
                </div>

                <div className="flex flex-col items-start md:items-center text-left md:text-center group">
                  <div className="w-14 h-14 bg-[#241d1a] border border-[#382d28] rounded-full flex items-center justify-center text-gray-400 group-hover:text-brand-orange group-hover:border-brand-orange transition-all mb-4 shadow-sm">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-lg mb-1 text-[#F4F0EB]">Working Hours</h4>
                  <p className="text-gray-400">Mon - Fri: 9AM - 6PM</p>
                </div>

                <div className="flex flex-col items-start md:items-center text-left md:text-center group">
                  <div className="w-14 h-14 bg-[#241d1a] border border-[#382d28] rounded-full flex items-center justify-center text-gray-400 group-hover:text-brand-orange group-hover:border-brand-orange transition-all mb-4 shadow-sm">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-lg mb-1 text-[#F4F0EB]">Our Office</h4>
                  <p className="text-gray-400 leading-snug">Payyoli - Perambra Rd<br/>Kozhikode, Kerala</p>
                </div>

              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-[#241d1a] rounded-2xl overflow-hidden relative border border-[#382d28]">
                <img 
                  src="/images/world-map.webp" 
                  alt="best-crm-company-in-kerala" 
                  className="w-full h-full object-cover grayscale opacity-30 mix-blend-screen"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                   <div className="w-12 h-12 bg-[#241d1a] rounded-full flex items-center justify-center text-brand-orange shadow-lg shadow-black/30 border border-[#382d28] animate-bounce">
                     <MapPin size={24} fill="currentColor" className="text-brand-orange" />
                   </div>
                   <div className="mt-2 bg-[#241d1a] px-3 py-1 rounded shadow-lg text-xs font-bold text-[#F4F0EB] border border-[#382d28]">
                     Lumeo HQ
                   </div>
                </div>
              </div>
              
            </div>
          </div>
        </main>

        {/* CTA Banner */}
        <section className="bg-black/40 text-white py-24 px-8 relative overflow-hidden border-t border-[#382d28]">
          {/* Background graphic elements */}
          <div className="absolute inset-0 opacity-10 mix-blend-luminosity">
            <Image src="/images/a-person-writing-on-a-glass.webp" alt="best-crm-company-in-kerala" fill className="object-cover object-center" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            <p className="font-bold tracking-[0.15em] uppercase text-gray-400 text-sm mb-4">Ready To Scale?</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight text-[#F4F0EB]">
              We Are Always Ready To<br/>Support Your Team
            </h2>
            <a href="https://lumeo.estgrp.in/" target="_blank" rel="noopener noreferrer" className="bg-brand-orange text-white hover:bg-[#c83d12] px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl">
              Start Free Trial
            </a>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
