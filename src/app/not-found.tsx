"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <h1 className="text-4xl md:text-6xl font-thin mb-6">
          <span className="gold-text">404</span>
        </h1>
        <div className="gold-hairline my-6 w-24 mx-auto"></div>
        <p className="text-xl md:text-2xl font-light mb-8">
          This is a demo mockup for Jessica Li.
        </p>
        <Link href="/" className="btn-primary px-8 py-3 inline-block">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
