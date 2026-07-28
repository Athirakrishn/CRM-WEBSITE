"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What is CRM software?",
    answer: <>CRM (Customer Relationship Management) software like Lumeo, one of the leading <strong className="text-gray-200 font-bold">CRM software in Kerala</strong>, helps teams organize leads, manage pipelines, track customer interactions, and stay on top of daily tasks, all in one unified workspace.</>
  },
  {
    question: "What are popular free CRM software features?",
    answer: "Top free CRM features Easy pipeline tracking Contact management Basic reporting Task assignments Lumeo is one of the best CRM software platforms in Kerala which is a good example of this with a robust free tier and a 14-day free trial to get you started without a credit card up-front."
  },
  {
    question: "How much does CRM software cost?",
    answer: "CRM costs vary widely based on features and seat counts. Lumeo is built with growth in mind, offering transparent pricing without hidden fees to accommodate your whole team as you scale."
  },
  {
    question: "What are the main functions of a CRM system?",
    answer: "A CRM ties your sales process all together. Main functions include deal tracking, customer profiling, notes and communication logging, pipeline management and no follow-ups falling through the cracks. This is what makes Lumeo one of the most reliable CRM software for businesses and teams in Kerala."
  },
  {
    question: "Who uses CRM software?",
    answer: "CRM software is used by sales teams, marketing agencies, customer support reps, and business owners who want to unify their data, eliminate spreadsheets, and close deals more efficiently."
  },
  {
    question: "What should I look for when choosing a CRM system?",
    answer: "Search for an easy-to-use interface, customizable pipeline stages, an integrated task management tool and clear pricing. Lumeo brings all these together to create a high-end experience, making it one of the top CRM software platforms for teams in need of scaling, particularly within the Kerala business landscape."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const [typedText, setTypedText] = useState('');
  const fullText = 'FAQs About CRM Software in Kerala';

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let currentText = '';
    let i = 0;
    const interval = setInterval(() => {
      currentText += fullText[i];
      setTypedText(currentText);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [isVisible]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-24 bg-[#1A1513] text-[#F4F0EB] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E04B1E] rounded-full blur-[120px] opacity-10 pointer-events-none z-0"></div>
      
      <div className="max-w-3xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">

          <h2 className="sr-only">FAQs About CRM Software in Kerala</h2>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#F4F0EB] min-h-[1.2em]">{typedText}</h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Everything You Need to Know About the Best CRM Software in Kerala and How It Works
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-[#241d1a] border ${isOpen ? 'border-brand-orange' : 'border-[#382d28]'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <h3 className={`text-lg md:text-xl font-serif font-bold transition-colors ${isOpen ? 'text-brand-orange' : 'text-[#F4F0EB] group-hover:text-brand-orange'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-orange text-white' : 'bg-[#1A1513] text-gray-400 border border-[#382d28]'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 md:px-8 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
