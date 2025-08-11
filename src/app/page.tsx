"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesSplit from "@/components/ServicesSplit";
import About from "@/components/About";
import Coaching from "@/components/Coaching";
import Events from "@/components/Events";
import Fundraising from "@/components/Fundraising";
import Podcast from "@/components/Podcast";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  // Calculate the announcement bar height (approximately 36px)
  const announcementHeight = isAnnouncementVisible ? '36px' : '0px';

  return (
    <main className="overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-40 w-full">
        <AnnouncementBar onVisibilityChange={setIsAnnouncementVisible} />
      </div>
      <div>
        <Navbar isAnnouncementVisible={isAnnouncementVisible} />
        <Hero />
        <SocialProof />
        <ServicesSplit />
        <About />
        <Coaching />
        <Events />
        <Fundraising />
        <Podcast />
        <Consultation />
        <Footer />
      </div>
    </main>
  );
}