"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnnouncementBarProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

export default function AnnouncementBar({ onVisibilityChange }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibility = window.scrollY <= 100;
      if (isVisible !== newVisibility) {
        setIsVisible(newVisibility);
        onVisibilityChange?.(newVisibility);
      }
    };

    // Initial call to set the initial state
    onVisibilityChange?.(isVisible);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, onVisibilityChange]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-black-dark border-b border-gold-deep/30 overflow-hidden"
          style={{ margin: 0, padding: 0 }}
        >
          <div className="container mx-auto px-4 py-1.5 text-center">
            <p className="text-sm font-light">
              Join us for The Align Experience — Sat, Sept 27 · 12–5 pm · NYC ·{" "}
              <a
                href="#events"
                className="gold-text underline hover:text-gold-light transition-colors"
              >
                Click here to apply
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}