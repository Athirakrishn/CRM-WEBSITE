"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu, X } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Interactive Sandbox', path: '/' },
    { name: 'Workflow Redesign', path: '/workflow-redesign' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'ROI Calculator', path: '/roi-calculator' },
    { name: 'Why LumeoCRM', path: '/comparison' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button suppressHydrationWarning 
            className="lg:hidden text-gray-500 hover:text-brand-orange transition-colors focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`text-sm font-medium transition-all duration-200 relative group py-2 ${
                  pathname === link.path ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange transform origin-left transition-transform duration-300 ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section (Contact) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link 
              href="/contact" 
              className="text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover px-5 py-2.5 rounded-md transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                  pathname === link.path 
                    ? 'bg-orange-50 text-brand-orange' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-base font-medium text-white bg-brand-orange hover:bg-brand-orange-hover px-4 py-3 rounded-lg transition-colors mt-2 text-center"
            >
              Contact Sales
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
