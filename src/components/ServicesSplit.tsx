"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesSplit() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Events Panel */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative h-[500px] overflow-hidden image-container"
                style={{
                backgroundImage: "url('/experience.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center 60%",
                }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black-dark to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
              <h3 className="text-2xl md:text-3xl font-light mb-4 gold-text">
                Events & The Align Experience®
              </h3>
              <p className="text-white-dim mb-6 font-light">
                Curated, application-only immersions that catalyze real relationships and lived transformation.
              </p>
              <Link href="/events" className="btn-primary inline-block px-8 py-3 w-fit">
                More About Events
              </Link>
            </div>
          </motion.div>

          {/* Coaching Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative h-[500px] overflow-hidden image-container"
            style={{
              backgroundImage: "url('/oneonone.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black-dark to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
              <h3 className="text-2xl md:text-3xl font-light mb-4 gold-text">
                Private Executive Coaching
              </h3>
              <p className="text-white-dim mb-6 font-light">
                Bespoke, outcome-driven coaching for investors, founders and high-performing professionals.
              </p>
              <Link href="/coaching" className="btn-primary inline-block px-8 py-3 w-fit">
                More About Coaching
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}