"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Fundraising() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="fundraising" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <span className="gold-text">Fundraising for Investment Managers</span>
          </h2>
          <div className="gold-hairline w-24 my-4"></div>
          
          <p className="text-white-dim mb-12 font-light">
            It's not just a numbers game; it's presence, alignment, trust. With 12 years of experience 
            across alternatives, capital raising, and narrative shaping, we help you connect with the 
            right investors at the right time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black-light border border-gold-deep/20 p-6 rounded-sm">
              <h3 className="text-lg font-light mb-3 gold-text">Fundraise Strategy</h3>
              <p className="text-white-dim font-light text-sm">
                Strategic tiering, roadshows, allocator introductions, and investor day planning 
                to maximize your capital raising efforts.
              </p>
            </div>
            
            <div className="bg-black-light border border-gold-deep/20 p-6 rounded-sm">
              <h3 className="text-lg font-light mb-3 gold-text">Materials & Thought Leadership</h3>
              <p className="text-white-dim font-light text-sm">
                Develop trusted messaging, establish category leadership, and create compelling 
                materials for each stage of your fundraising journey.
              </p>
            </div>
            
            <div className="bg-black-light border border-gold-deep/20 p-6 rounded-sm">
              <h3 className="text-lg font-light mb-3 gold-text">Fundraise Coaching</h3>
              <p className="text-white-dim font-light text-sm">
                Refine your why-us narrative, master objection handling, and receive emotional/energetic 
                support throughout the fundraising process.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/consultation" className="btn-primary px-10 py-4 inline-block">
              Discuss Your Raise
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}