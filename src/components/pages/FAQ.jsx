"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';


const faqs = [
  {
    question: "What is CRM software?",
    answer: <>CRM (Customer Relationship Management) software like Lumeo, one of the leading <strong className="text-gray-900 font-bold">CRM software in Kerala</strong>, helps teams organize leads, manage pipelines, track customer interactions, and stay on top of daily tasks, all in one unified workspace.</>
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'FAQs About CRM Software in Kerala';

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
    <div className="min-h-screen bg-transparent font-sans text-brand-dark flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 min-h-[1.2em]">{typedText}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything You Need to Know About the Best CRM Software in Kerala and How It Works
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-100 last:border-b-0 transition-colors duration-300 ${openIndex === index ? 'bg-orange-50/50' : ''}`}
              >
                <button suppressHydrationWarning 
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === index ? 'text-brand-orange' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-brand-orange shrink-0 ml-4 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0 ml-4 transition-transform duration-300" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/contact">
              <button suppressHydrationWarning className="bg-white border border-gray-300 hover:border-brand-orange hover:text-brand-orange px-6 py-3 rounded-lg font-bold transition-colors shadow-sm">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;
