"use client";
import React from 'react';
import { Check, X, ArrowRight, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import Header from '../Header';
import Footer from '../Footer';

function Comparison() {
  const monthlyPlans = [
    { name: 'Starter', users: 'Up to 5 Users', price: '₹299', period: '/ Month' },
    { name: 'Small Business', users: 'Up to 10 Users', price: '₹499', period: '/ Month' },
    { name: 'Growth', users: 'Up to 20 Users', price: '₹999', period: '/ Month' },
    { name: 'Professional', users: 'Up to 50 Users', price: '₹1,999', period: '/ Month' },
    { name: 'Enterprise', users: '50+ Users', price: 'Custom', period: 'Pricing' }
  ];

  const annualPlans = [
    { name: 'Starter', users: 'Up to 5 Users', price: '₹2,499', period: '/ Year', equivalent: '₹208 / Month' },
    { name: 'Small Business', users: 'Up to 10 Users', price: '₹4,499', period: '/ Year', equivalent: '₹375 / Month' },
    { name: 'Growth', users: 'Up to 20 Users', price: '₹8,999', period: '/ Year', equivalent: '₹750 / Month', isRecommended: true },
    { name: 'Professional', users: 'Up to 50 Users', price: '₹19,999', period: '/ Year', equivalent: '₹1,666 / Month' },
    { name: 'Enterprise', users: '50+ Users', price: 'Custom', period: 'Pricing', equivalent: 'Custom Pricing' }
  ];

  const featuresList = [
    {
      name: 'Starter Plan',
      users: 'Up to 5 Users',
      desc: 'Suitable for startups and small teams.',
      features: ['Lead Management', 'Customer Database', 'Contact Management', 'Follow-up Tracking', 'Task Management', 'Basic Reports', 'Email Support']
    },
    {
      name: 'Small Business Plan',
      users: 'Up to 10 Users',
      desc: 'Suitable for growing companies.',
      features: ['All Starter Features', 'Sales Pipeline', 'Team Management', 'Customer History', 'Dashboard', 'Reports', 'User Management', 'Online Support']
    },
    {
      name: 'Growth Plan',
      users: 'Up to 20 Users',
      desc: 'Ideal for scaling teams.',
      features: ['All Small Business Features', 'Advanced Reports', 'User Roles & Permissions', 'Sales Tracking', 'Priority Support']
    },
    {
      name: 'Professional Plan',
      users: 'Up to 50 Users',
      desc: 'For large established teams.',
      features: ['All Growth Features', 'Advanced Dashboard', 'Multiple Teams', 'Workflow Management', 'Business Analytics', 'Priority Support']
    }
  ];

  const competitors = [
    { name: 'Lumeo CRM', isBrand: true },
    { name: 'Salesforce', isBrand: false },
    { name: 'HubSpot', isBrand: false },
    { name: 'Zoho CRM', isBrand: false }
  ];

  const comparisonFeatures = [
    { name: "Affordable SME Pricing (India)", lumeo: true, salesforce: false, hubspot: false, zoho: false },
    { name: "Free Setup Assistance", lumeo: true, salesforce: false, hubspot: false, zoho: false },
    { name: "Free Online Training", lumeo: true, salesforce: false, hubspot: false, zoho: false },
    { name: "Hidden Add-on Fees", lumeo: false, salesforce: true, hubspot: true, zoho: true },
    { name: "Priority Support on Annual Plans", lumeo: true, salesforce: false, hubspot: false, zoho: false },
    { name: "Intuitive Modern UI", lumeo: true, salesforce: false, hubspot: true, zoho: false },
  ];

  const additionalServices = [
    { service: 'Additional User', charges: '₹50 / User / Month' },
    { service: 'Additional User (Annual)', charges: '₹400 / User / Year' },
    { service: 'Initial Setup', charges: 'Free' },
    { service: 'Online Training', charges: 'Free' },
    { service: 'Basic Data Import', charges: 'Free' },
    { service: 'Advanced Data Migration', charges: 'Based on requirement' },
    { service: 'Custom Development', charges: 'Based on scope' }
  ];

  return (
    <div className="bg-[#1A1513] min-h-screen text-[#F4F0EB] overflow-hidden relative">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E04B1E] rounded-full blur-[150px] opacity-20 -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E04B1E] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2"></div>

      <Header />
      <div className="pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-[#E04B1E] font-bold tracking-wider uppercase text-sm mb-4 inline-block">For Indian Startups & SMEs</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#F4F0EB] mb-6">
            Lumeo CRM – Top CRM Software with Budget-Friendly <span className="text-brand-orange">Subscription Plans</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Introducing Lumeo, a top CRM software and complete customer relationship management software solution, with affordable monthly and annual subscription options for startups and small businesses in India. No hidden fees. Just value.
          </p>
          <div className="inline-flex items-center gap-4 bg-[#231d1a] p-4 rounded-xl shadow-md border border-[#3b302c] max-w-xl mx-auto">
            <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex flex-shrink-0 items-center justify-center text-brand-orange">
              <Star className="w-6 h-6" />
            </div>
            <div className="text-left flex-grow">
              <h3 className="font-bold text-[#F4F0EB]">14-Day Free Trial</h3>
              <p className="text-sm text-gray-400">No payment required. Full CRM access.</p>
            </div>
            <Link href="/sandbox" className="ml-4 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap">
              Start Trial
            </Link>
          </div>
        </div>

        {/* Annual Plans */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-[#F4F0EB] mb-4">Annual Subscription Plans</h2>
            <p className="text-gray-400">Save more with our highly recommended annual plans — flexible pricing for every team using this top CRM software.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {annualPlans.map((plan, idx) => (
              <div key={idx} className={`rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${plan.isRecommended ? 'bg-[#110e0c] text-white shadow-xl ring-2 ring-brand-orange' : 'bg-[#231d1a] text-[#F4F0EB] shadow-md border border-[#3b302c]'}`}>
                {plan.isRecommended && (
                  <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-1 ${plan.isRecommended ? 'text-white' : 'text-[#F4F0EB]'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.isRecommended ? 'text-gray-300' : 'text-brand-orange font-medium'}`}>{plan.users}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-black ${plan.isRecommended ? 'text-brand-orange' : 'text-[#F4F0EB]'}`}>{plan.price}</span>
                </div>
                <p className={`text-sm ${plan.isRecommended ? 'text-gray-300' : 'text-gray-400'}`}>{plan.period}</p>
                <div className={`mt-4 py-3 border-t ${plan.isRecommended ? 'border-gray-800' : 'border-[#3b302c]'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.isRecommended ? 'text-gray-400' : 'text-gray-500'}`}>Equivalent to</p>
                  <p className={`font-bold ${plan.isRecommended ? 'text-white' : 'text-gray-200'}`}>{plan.equivalent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Plans */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#F4F0EB] mb-4">Monthly Subscription Plans</h2>
            <p className="text-gray-400">Flexible monthly billing for growing teams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-end mt-8">
            {monthlyPlans.map((plan, idx) => {
              const isGrowth = plan.name === 'Growth';
              return (
                <div key={idx} className={`relative rounded-2xl p-6 text-center shadow-lg transition-transform hover:-translate-y-2 flex flex-col justify-between h-full min-h-[300px] border ${isGrowth ? 'bg-brand-orange text-white border-brand-orange transform lg:scale-110 z-10' : 'bg-[#231d1a] text-[#F4F0EB] border-[#3b302c]'}`}>

                  {isGrowth && (
                    <>
                      <div className="absolute top-0 left-0 bg-black/20 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg rounded-tl-2xl uppercase tracking-wider">
                        Popular
                      </div>
                      <div className="absolute top-0 right-0 bg-white text-brand-orange text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl uppercase tracking-wider shadow-sm">
                        Recommended
                      </div>
                    </>
                  )}

                  <div className={`pt-4 ${isGrowth ? 'pt-6' : ''}`}>
                    <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${isGrowth ? 'text-white' : 'text-brand-orange'}`}>{plan.name}</h3>
                    <div className="mb-6">
                      <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full ${isGrowth ? 'bg-white/20 text-white' : 'bg-[#1a1513] text-gray-300 border border-[#3b302c]'}`}>
                        {plan.users}
                      </span>
                    </div>
                    <div className="flex justify-center items-end gap-1 mb-8">
                      <span className="text-4xl font-black">{plan.price}</span>
                      <span className={`text-sm font-medium pb-1 ${isGrowth ? 'text-white/90' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>
                  </div>

                  <button suppressHydrationWarning className={`w-full py-3 rounded-lg font-bold text-sm transition-colors mt-auto ${isGrowth ? 'bg-white text-brand-orange hover:bg-gray-50' : 'bg-[#110e0c] text-[#F4F0EB] hover:bg-brand-orange border border-[#3b302c] hover:border-brand-orange'}`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Select Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plan Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#F4F0EB] mb-4">Plan Features</h2>
            <p className="text-gray-400">Everything you need to grow your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresList.map((plan, idx) => (
              <div key={idx} className="bg-[#231d1a] rounded-2xl p-8 shadow-md border border-[#3b302c] flex flex-col h-full">
                <h3 className="text-xl font-bold text-[#F4F0EB] mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-brand-orange/10 text-brand-orange border border-brand-orange/20 text-xs font-bold px-3 py-1 rounded-full">{plan.users}</span>
                </div>
                <p className="text-sm text-gray-400 mb-6 flex-grow">{plan.desc}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services & Acquisition Offers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services Table */}
            <div className="bg-[#231d1a] rounded-2xl shadow-xl overflow-hidden border border-[#3b302c]">
              <div className="p-6 bg-[#1a1513] border-b border-[#3b302c]">
                <h3 className="text-xl font-bold text-[#F4F0EB]">Additional Services</h3>
              </div>
              <table className="w-full text-left">
                <tbody>
                  {additionalServices.map((service, idx) => (
                    <tr key={idx} className="border-b border-[#3b302c] last:border-0 hover:bg-[#2a2320]">
                      <td className="py-4 px-6 text-sm text-gray-200 font-medium">{service.service}</td>
                      <td className="py-4 px-6 text-sm text-gray-400 text-right">{service.charges}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Offers */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#110e0c] border border-[#3b302c] rounded-2xl overflow-hidden shadow-xl relative h-full flex flex-col">
                <div className="h-40 w-full overflow-hidden">
                  <img src="/images/a-peron-touch-on-a-glass-crm-option.webp" alt="best-crm-platforms" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 relative flex-grow">
                  <div className="absolute top-0 right-0 opacity-10">
                    <TrendingUp className="w-48 h-48 -mr-10 -mt-10 text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 relative z-10 text-[#F4F0EB]">First Year Offers</h3>
                  <ul className="space-y-4 relative z-10">
                    {['14-Day Free Trial', 'Free Setup Assistance', 'Free Online Training', 'Special pricing for first 100 customers', 'Customer referral benefits', 'Annual plan customers get priority support'].map((offer, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-brand-orange/20 p-1.5 rounded-full border border-brand-orange/30">
                          <Check className="w-4 h-4 text-brand-orange" />
                        </div>
                        <span className="text-gray-300 font-medium">{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-[#231d1a] rounded-2xl shadow-xl overflow-hidden border border-[#3b302c]">
            <div className="p-8 bg-[#1a1513] border-b border-[#3b302c]">
              <h2 className="text-2xl font-serif font-bold text-[#F4F0EB] text-center">How We Compare to Other CRMs</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#1a1513]">
                    <th className="py-5 px-6 border-b border-[#3b302c] text-gray-400 font-semibold text-sm uppercase tracking-wider w-1/3">
                      Features / Benefits
                    </th>
                    {competitors.map((comp, idx) => (
                      <th key={idx} className={`py-5 px-6 border-b border-[#3b302c] font-bold text-center ${comp.isBrand ? 'text-brand-orange bg-brand-orange/5' : 'text-gray-300'}`}>
                        {comp.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-[#2a2320] transition-colors">
                      <td className="py-4 px-6 border-b border-[#3b302c] text-gray-200 font-medium">
                        {feature.name}
                      </td>
                      <td className="py-4 px-6 border-b border-[#3b302c] text-center bg-brand-orange/5">
                        {feature.lumeo ? (
                          <Check className="w-6 h-6 text-brand-orange mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 border-b border-[#3b302c] text-center">
                        {feature.salesforce ? (
                          <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 border-b border-[#3b302c] text-center">
                        {feature.hubspot ? (
                          <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 border-b border-[#3b302c] text-center">
                        {feature.zoho ? (
                          <Check className="w-5 h-5 text-gray-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Target Audience / CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#F4F0EB] mb-6">Perfect for Indian SMEs</h2>
          <p className="text-lg text-gray-400 mb-8">
            Built specially for startups, small businesses, trading companies, service agencies, real estate, and small manufacturing companies in India — powered by a top CRM software and complete customer relationship management software, all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sandbox" className="inline-flex justify-center items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-md font-medium text-lg transition-colors shadow-lg shadow-brand-orange/20">
              Start 14-Day Free Trial
            </Link>
            <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-[#110e0c] border border-[#3b302c] hover:bg-[#1a1513] text-[#F4F0EB] px-8 py-4 rounded-md font-medium text-lg transition-colors">
              Talk to Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Comparison;
