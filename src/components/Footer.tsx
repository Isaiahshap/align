"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
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

  const legalLinks = [
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-black-dark pt-20 pb-10 border-t border-gold-deep/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand Column */}
          <div>
            <Link href="/">
              <div className="text-2xl font-light tracking-wider mb-6">
                <span className="gold-text font-normal">ALIGN</span>
              </div>
            </Link>
            <p className="text-white-dim text-sm mb-6 font-light">
              Exclusive executive coaching and immersive leadership experiences for entrepreneurs, investors, and high-performing professionals.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-gold-deep/50 flex items-center justify-center text-gold-deep hover:border-gold-light hover:text-gold-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-gold-deep/50 flex items-center justify-center text-gold-deep hover:border-gold-light hover:text-gold-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-gold-deep/50 flex items-center justify-center text-gold-deep hover:border-gold-light hover:text-gold-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-light mb-6 gold-text">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white-dim hover:text-gold-light transition-colors text-sm font-light">
                  Home
                </Link>
              </li>
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white-dim hover:text-gold-light transition-colors text-sm font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-light mb-6 gold-text">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white-dim hover:text-gold-light transition-colors text-sm font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-light mb-6 gold-text">Contact</h3>
            <p className="text-white-dim text-sm mb-4 font-light">
              For inquiries about coaching, events, or speaking engagements:
            </p>
            <a href="mailto:contact@align.vision" className="text-gold-deep hover:text-gold-light transition-colors text-sm font-light block mb-6">
              contact@align.vision
            </a>
            <Link href="/consultation" className="btn-primary inline-block px-6 py-2.5 text-sm">
              Book a Consultation
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="gold-hairline mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white-dimmer text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Align Divine LLC. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-white-dimmer hover:text-gold-light text-xs transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <p className="text-center text-white-dimmer text-xs mt-8">
          Demo mockup; all content ©
        </p>
      </div>
    </footer>
  );
}