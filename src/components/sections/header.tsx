"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Change background color when menu is open
  useEffect(() => {
    const floatingButton = document.querySelector('[data-floating-register]');
    
    if (isMobileMenuOpen) {
      // Hide floating button
      if (floatingButton) {
        (floatingButton as HTMLElement).style.display = 'none';
      }
      // Change html and body background to white with important to override any other styles
      document.documentElement.style.setProperty('background-color', 'white', 'important');
      document.body.style.setProperty('background-color', 'white', 'important');
      document.body.style.transition = 'background-color 0.3s ease-out';
      document.documentElement.style.transition = 'background-color 0.3s ease-out';
      // Also set overflow hidden to prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Show floating button
      if (floatingButton) {
        (floatingButton as HTMLElement).style.display = 'block';
      }
      // Reset html and body background
      document.documentElement.style.removeProperty('background-color');
      document.body.style.removeProperty('background-color');
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '#',
      dropdown: [
        { name: 'Mission', href: '/about/mission' },
        { name: 'Team', href: '/about/team' }
      ]
    },
    { 
      name: 'Conferences', 
      href: '#',
      dropdown: [
        { name: 'Initiative', href: '/initiative' },
        { name: 'Past Conferences', href: '/conferences' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background pt-[28px] font-body">
        <div className="flex h-[32px] items-center justify-between pl-14 pr-14">
          {/* Left Side - Menu Button and Logo aligned to absolute left */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="relative w-8 h-8 z-[80]"
            >
              {/* Animated hamburger/X icon */}
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                {/* Top line */}
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-0' 
                    : 'rotate-0 -translate-y-2'
                }`} />
                
                {/* Middle line */}
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                
                {/* Bottom line */}
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute ${
                  isMobileMenuOpen 
                    ? '-rotate-45 translate-y-0' 
                    : 'rotate-0 translate-y-2'
                }`} />
              </div>
            </button>
            
            <Link href="/" className="z-[80]">
               <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0a81aefa-006b-45bc-86ef-4ca6a005b03e-democracyincubator-org/assets/svgs/logo-1.svg?"
                alt="APDI: Asia-Pacific Democracy Incubator"
                width={120}
                height={28}
                priority
              />
            </Link>
          </div>
          
          {/* Right Side - Navigation Only */}
          <nav className="flex items-center">
            <ul className="flex items-center space-x-7">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group-hover:text-primary">
                        {item.name}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E44A2C] hover:text-white transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 z-[70] bg-white transition-all duration-300 ease-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col h-full w-full">
          {/* Header with menu button and logo - exact positioning match with desktop */}
          <div className="pt-[28px] pb-6 pl-14 pr-14">
            <div className="flex h-[32px] items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                  className="relative w-8 h-8 z-[80]"
                >
                  {/* X icon */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="w-6 h-0.5 bg-current rotate-45 translate-y-0" />
                    <div className="w-6 h-0.5 bg-current -rotate-45 translate-y-0 absolute" />
                  </div>
                </button>
                
                <Link href="/" onClick={toggleMobileMenu}>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0a81aefa-006b-45bc-86ef-4ca6a005b03e-democracyincubator-org/assets/svgs/logo-1.svg?"
                    alt="APDI: Asia-Pacific Democracy Incubator"
                    width={120}
                    height={28}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Full Screen Navigation */}
          <nav className="flex-1 flex items-center justify-center px-14">
            <ul className="space-y-12 text-center">
              <li>
                <Link 
                  href="/" 
                  onClick={toggleMobileMenu}
                  className="block text-6xl font-bold text-black uppercase tracking-wide hover:text-[#E44A2C] transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <div 
                  className="text-6xl font-bold text-black uppercase tracking-wide cursor-pointer hover:text-[#E44A2C] transition-colors"
                  onMouseEnter={() => setHoveredItem('about')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  ABOUT
                  {hoveredItem === 'about' && (
                    <div className="mt-6 space-y-3">
                      <Link 
                        href="/about/mission" 
                        onClick={toggleMobileMenu}
                        className="block text-xl font-medium text-gray-600 hover:text-[#E44A2C] transition-colors"
                      >
                        Mission
                      </Link>
                      <Link 
                        href="/about/team" 
                        onClick={toggleMobileMenu}
                        className="block text-xl font-medium text-gray-600 hover:text-[#E44A2C] transition-colors"
                      >
                        Team
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div 
                  className="text-6xl font-bold text-black uppercase tracking-wide cursor-pointer hover:text-[#E44A2C] transition-colors"
                  onMouseEnter={() => setHoveredItem('conferences')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  CONFERENCES
                  {hoveredItem === 'conferences' && (
                    <div className="mt-6 space-y-3">
                      <Link 
                        href="/initiative" 
                        onClick={toggleMobileMenu}
                        className="block text-xl font-medium text-gray-600 hover:text-[#E44A2C] transition-colors"
                      >
                        Initiative
                      </Link>
                      <Link 
                        href="/conferences" 
                        onClick={toggleMobileMenu}
                        className="block text-xl font-medium text-gray-600 hover:text-[#E44A2C] transition-colors"
                      >
                        Past Conferences
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={toggleMobileMenu}
                  className="block text-6xl font-bold text-black uppercase tracking-wide hover:text-[#E44A2C] transition-colors"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;