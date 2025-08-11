"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isAnnouncementVisible?: boolean;
}

export default function Navbar({ isAnnouncementVisible = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const dropdown = dropdownRefs.current[activeDropdown];
        const button = buttonRefs.current[activeDropdown];
        
        if (
          dropdown && 
          button && 
          !dropdown.contains(event.target as Node) && 
          !button.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const aboutLinks = [
    { name: "About Jessica", href: "/bio" },
    { name: "The Align Podcast", href: "/podcast" },
    { name: "Press Appearances", href: "/press" },
  ];

  const serviceLinks = [
    { name: "Coaching", href: "/coaching" },
    { name: "Fundraising", href: "/fundraising" },
    { name: "Private Experiences", href: "/experiences" },
    { name: "Events", href: "/events" },
    { name: "Consultations", href: "/consultation" },
  ];

  return (
    <header
      className={`fixed ${isAnnouncementVisible ? 'top-10' : 'top-0'} left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-black-dark bg-opacity-90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-light tracking-wider"
          >
            <span className="gold-text font-normal">ALIGN</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-white-dim hover:text-off-white hover:gold-text text-sm font-light tracking-wide transition-all duration-300"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                ref={(el) => {
                  buttonRefs.current['about'] = el;
                }}
                onMouseEnter={() => toggleDropdown('about')}
                className="flex items-center text-white-dim hover:text-off-white text-sm font-light tracking-wide transition-all duration-300"
              >
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${
                    activeDropdown === 'about' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    ref={(el) => {
                      dropdownRefs.current['about'] = el;
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-48 bg-black-dark border border-gold-deep/20 shadow-lg rounded-sm z-50"
                    onMouseLeave={() => setTimeout(() => closeDropdowns(), 200)}
                  >
                    {/* Invisible bridge to prevent dropdown from closing */}
                    <div className="absolute h-4 w-full -top-4 left-0"></div>
                    <div className="py-2">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-white-dim hover:text-gold-light hover:bg-black-light text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                ref={(el) => {
                  buttonRefs.current['services'] = el;
                }}
                onMouseEnter={() => toggleDropdown('services')}
                className="flex items-center text-white-dim hover:text-off-white text-sm font-light tracking-wide transition-all duration-300"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    ref={(el) => {
                      dropdownRefs.current['services'] = el;
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-48 bg-black-dark border border-gold-deep/20 shadow-lg rounded-sm z-50"
                    onMouseLeave={() => setTimeout(() => closeDropdowns(), 200)}
                  >
                    {/* Invisible bridge to prevent dropdown from closing */}
                    <div className="absolute h-4 w-full -top-4 left-0"></div>
                    <div className="py-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-white-dim hover:text-gold-light hover:bg-black-light text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/consultation"
            className="btn-primary ml-8 px-5 py-2 text-sm tracking-wide"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-off-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed inset-0 ${isAnnouncementVisible ? 'top-10' : 'top-0'} bg-black-dark bg-opacity-95 flex flex-col pt-20 z-40 lg:hidden overflow-y-auto`}
              style={{ height: "100vh" }}
            >
              <nav className="flex flex-col items-center space-y-6 w-full px-8 overflow-y-auto">
                <Link
                  href="/"
                  className="text-white-dim hover:text-off-white text-lg font-light tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile About Section */}
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown('mobile-about')}
                    className="flex items-center justify-center w-full text-white-dim hover:text-off-white text-lg font-light tracking-wide mb-2"
                  >
                    About
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-2 transition-transform ${
                        activeDropdown === 'mobile-about' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-about' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col space-y-3 mb-4 border-l border-gold-deep/30 pl-4 ml-4">
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="text-white-dim hover:text-gold-light text-base font-light"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Services Section */}
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown('mobile-services')}
                    className="flex items-center justify-center w-full text-white-dim hover:text-off-white text-lg font-light tracking-wide mb-2"
                  >
                    Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-2 transition-transform ${
                        activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col space-y-3 mb-4 border-l border-gold-deep/30 pl-4 ml-4">
                          {serviceLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="text-white-dim hover:text-gold-light text-base font-light"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/consultation"
                  className="btn-primary mt-4 px-6 py-3 text-base w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Session
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}