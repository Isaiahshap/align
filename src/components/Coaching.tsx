"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Coaching() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="coaching" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <span className="gold-text">Coaching Overview</span>
          </h2>
          <div className="gold-hairline w-24 mx-auto my-4"></div>
          <p className="text-white-dim font-light">
            Outcome-driven, empathetic, and action-oriented coaching designed for high-performing professionals.
            Our weekly collaboration creates sustainable transformation through personalized strategies and 
            accountability frameworks.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* 1:1 Coaching */}
          <motion.div
            variants={fadeInUp}
            className="bg-black-light border border-gold-deep/20 p-8 rounded-sm"
          >
            <h3 className="text-xl font-light mb-4 gold-text">1:1 Coaching</h3>
            <p className="text-white-dim mb-6 font-light">
              Personalized, outcome-driven coaching with weekly calls and comprehensive MMAP 
              (mental map & action plan) to accelerate your growth and transformation.
            </p>
            <ul className="text-white-dim mb-6 font-light text-sm">
              <li className="mb-2 flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Weekly 1:1 sessions</span>
              </li>
              <li className="mb-2 flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Customized action plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Unlimited messaging support</span>
              </li>
            </ul>
          </motion.div>

          {/* Group Elevate */}
          <motion.div
            variants={fadeInUp}
            className="bg-black-light border border-gold-deep/20 p-8 rounded-sm"
          >
            <h3 className="text-xl font-light mb-4 gold-text">Group Elevate</h3>
            <p className="text-white-dim mb-6 font-light">
              Mental & emotional fitness series for tight-knit cohorts, creating a supportive 
              community of like-minded professionals committed to growth.
            </p>
            <ul className="text-white-dim mb-6 font-light text-sm">
              <li className="mb-2 flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>8-week intensive program</span>
              </li>
              <li className="mb-2 flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Bi-weekly group sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Peer accountability network</span>
              </li>
            </ul>
          </motion.div>

          {/* Corporate Experiences */}
          <motion.div
            variants={fadeInUp}
            className="bg-black-light border border-gold-deep/20 p-8 rounded-sm"
          >
            <h3 className="text-xl font-light mb-4 gold-text">Corporate Experiences</h3>
            <p className="text-white-dim mb-6 font-light">
              Custom immersions that unlock potential, camaraderie, and connection within your 
              organization, designed to elevate team performance and culture.
            </p>
            <ul className="text-white-dim mb-6 font-light text-sm">
              <li className="mb-2 flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Tailored team workshops</span>
              </li>
              <li className="mb-2 flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Leadership development</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-deep mr-2">•</span>
                <span>Culture transformation</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link href="/consultation" className="btn-primary px-8 py-3">
            Book a Consultation
          </Link>
          <Link href="/experiences" className="btn-secondary px-8 py-3">
            See Corporate Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}