"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16">
      {/* Background image with multiple gradient overlays for sophisticated effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/heroalign.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      
      {/* Gradient overlay - top to bottom */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)"
        }}
      ></div>
      
      {/* Gradient overlay - left to right */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)"
        }}
      ></div>
      
      {/* Vignette effect for depth */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          boxShadow: "inset 0 0 150px 60px rgba(0,0,0,0.9)"
        }}
      ></div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/png;base64,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')",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Spacer to move content down */}
          <div className="h-16 md:h-24"></div>
          <motion.h1 
            variants={item}
            className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
          >
            Elite Executive Coaching for Leaders Who Refuse to Plateau          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl font-light text-white-dim mb-10 max-w-2xl"
          >
            Bespoke 1:1 coaching, immersive leadership experiences, and high-level networking for entrepreneurs, investors, and high-performing professionals.          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Link 
              href="/consultation" 
              className="btn-primary px-8 py-4 text-base tracking-wide"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/events" 
              className="btn-secondary px-8 py-4 text-base tracking-wide"
            >
              Apply for The Align Experience
            </Link>
          </motion.div>
          
          <motion.div variants={item}>
            <div className="mb-6">
              <p className="text-sm text-white-dim mb-3">Featured in:</p>
              <div className="flex items-center">
                <div 
                  className="h-12 w-32 bg-black-light border border-gold-deep/30 flex items-center justify-center"
                >
                  <img
                    src="/latribune.png"
                    alt="LA Tribune"
                    className="h-8 object-contain filter invert"
                    style={{ maxWidth: "80%", maxHeight: "80%" }}
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://thelosangelestribune.com/2025/05/12/the-great-re-alignment-part-ii-real-people-real-outcomes-true-alignment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-deep ml-4 hover:text-gold-light transition-colors"
                >
                  Full Article →
                </a>
              </div>
            </div>
            
            <div className="flex gap-10 md:gap-16">
              <div className="flex flex-col items-center">
                <span className="block text-3xl gold-text tracking-wide">425+</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Friendships</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Made</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-3xl gold-text tracking-wide">375+</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Professional Partnerships</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Created</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-3xl gold-text tracking-wide">95+</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Romantic Connections</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Initiated</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}