"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Jessica's coaching transformed not only my business approach but my entire perspective on success. The results have been extraordinary.",
      name: "Sarah Johnson",
      title: "Founder & CEO, Elevate Capital"
    },
    {
      quote: "The Align Experience was unlike any professional development I've encountered. It created meaningful connections that have evolved into partnerships worth millions.",
      name: "Michael Chen",
      title: "Managing Partner, Horizon Ventures"
    },
    {
      quote: "Working with Jessica helped me redefine my leadership style and create a more fulfilling path forward. Her insights are invaluable.",
      name: "Alexandra Williams",
      title: "COO, Nexus Technologies"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-black-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-3">
              <span className="gold-text">Client Experiences</span>
            </h2>
            <div className="gold-hairline w-24 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black-light border border-gold-deep/20 p-8 md:p-10 rounded-sm"
              >
                <p className="text-lg md:text-xl font-light italic text-white-dim mb-8">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div>
                  <p className="gold-text font-normal">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-white-dim">{testimonials[activeIndex].title}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-gold-deep w-6" : "bg-white-dimmer"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}