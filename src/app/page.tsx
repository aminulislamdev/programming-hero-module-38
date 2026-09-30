'use client'

import BackgroundEffects from "@/components/home/BackgroundEffects";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BottomCTA from "@/components/home/BottomCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">
      <BackgroundEffects />
      <HeroSection />
      <FeaturesSection />
      <BottomCTA />
    </main>
  );
}