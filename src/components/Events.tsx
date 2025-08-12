"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Events() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="events" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <span className="gold-text">The Align Experience®</span>
          </h2>
          <div className="gold-hairline w-24 mx-auto my-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Event Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-black-dark border border-gold-deep/30 p-8 rounded-sm mb-8">
              <h3 className="text-xl font-light mb-6 gold-text">
                Upcoming Event
              </h3>
              <div className="flex flex-col space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-24 text-white-dim font-light">Date:</div>
                  <div>Sat, Sept 27</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-white-dim font-light">Time:</div>
                  <div>12–5 pm</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-white-dim font-light">Location:</div>
                  <div>NYC</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-white-dim font-light">Price:</div>
                  <div className="gold-text">$555 Signature Access</div>
                </div>
              </div>
              <Link href="/consultation" className="btn-primary w-full text-center py-3 block">
                Apply to Join
              </Link>
            </div>

            <p className="text-white-dim mb-8 font-light">
              The Align Experience is where Alice in Wonderland meets self-development. 
              Our exclusive, application-only process ensures a curated group of exceptional 
              individuals ready to forge meaningful connections and experience profound transformation.
            </p>

            <div className="flex gap-10 md:gap-16 mb-8">
              <div className="flex flex-col items-center">
                <span className="block text-2xl gold-text tracking-wide">425+</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Friendships</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Made</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-2xl gold-text tracking-wide">375+</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Professional Partnerships</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Created</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-2xl gold-text tracking-wide">95+</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Romantic Connections</span>
                <span className="block text-xs uppercase tracking-wider text-white-dim mt-1">Initiated</span>
              </div>
            </div>

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
              <a href="/press" className="text-xs text-gold-deep ml-4 hover:text-gold-light transition-colors">
                Full Article →
              </a>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="aspect-video bg-black-dark border border-gold-deep/30 overflow-hidden rounded-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h3ub2tIOWe0?start=18&modestbranding=1&rel=0&showinfo=0"
                title="The Align Experience - YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}