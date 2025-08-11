"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Podcast() {
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

  const episodes = [
    {
      title: "The Art of Authentic Leadership",
      guest: "David Chen, CEO of Innovate Partners",
      description: "Exploring how vulnerability transforms leadership effectiveness and team dynamics."
    },
    {
      title: "Wealth Beyond Numbers",
      guest: "Sarah Williams, Wealth Strategist",
      description: "Redefining success metrics beyond financial outcomes to create lasting fulfillment."
    },
    {
      title: "Conscious Capital: The Future of Investing",
      guest: "Michael Rodriguez, Impact Investor",
      description: "How aligned investments create both financial returns and meaningful change."
    }
  ];

  return (
    <section id="podcast" className="py-20 bg-black-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <span className="gold-text">The Align Podcast</span>
          </h2>
          <div className="gold-hairline w-24 mx-auto my-4"></div>
          <p className="text-white-dim font-light">
            Real, raw conversations with leaders and creators who value truth over performance.
            Exploring the intersection of success, fulfillment, and authentic living.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {episodes.map((episode, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-black-dark border border-gold-deep/20 p-6 rounded-sm ${
                index === 0 ? "md:col-span-3 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {index === 0 && <div className="text-xs text-gold-deep mb-2">LATEST EPISODE</div>}
              <h3 className="text-lg font-light mb-2 gold-text">{episode.title}</h3>
              <p className="text-white-dim text-sm mb-4">with {episode.guest}</p>
              <p className="text-white-dimmer text-sm mb-6">{episode.description}</p>
              <Link 
                href="/podcast"
                className="text-gold-deep hover:text-gold-light text-sm transition-colors inline-flex items-center"
              >
                Listen Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://youtube.com" 
            className="btn-secondary px-6 py-3 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            Listen on YouTube
          </a>
          <a 
            href="https://spotify.com" 
            className="btn-secondary px-6 py-3 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.75-.12-.87-.479-.12-.359.12-.75.48-.87 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
}