"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="bio" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Headshot Container */}
          <div 
            className="w-64 h-64 md:w-80 md:h-80 overflow-hidden border border-gold-deep/30"
            style={{
              backgroundImage: "url('/jessica.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          >
            {/* Empty container for user-provided image */}
          </div>

          {/* Bio Content */}
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-light mb-2">
              <span className="gold-text">Jessica Adriana Li</span> — Founder
            </h2>
            <div className="gold-hairline w-24 my-4"></div>
            <p className="text-white-dim mb-6 font-light">
              NYU Stern graduate with triple majors in Finance, Business Economics, and Psychology. 
              Former Goldman Sachs executive with 15+ years as a trusted coach and strategist for 
              high-performing professionals. Cultivated global investor relationships across multiple 
              industries, bringing a unique blend of analytical expertise and emotional intelligence.
            </p>
            <Link 
              href="/bio"
              className="inline-flex items-center text-gold-deep hover:text-gold-light transition-colors"
            >
              Read Bio & Reviews
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}