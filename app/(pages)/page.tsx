"use client";

import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { HeroSection } from "@/app/components/home/HeroSection";
import { VehicleGrid } from "@/app/components/home/VehicleGrid";
import { ServiceScenarios } from "@/app/components/home/ServiceScenarios";
import { StatsSection } from "@/app/components/home/StatsSection";
import { FeaturedRoutes } from "@/app/components/home/FeaturedRoutes";
import { CaseStudies } from "@/app/components/home/CaseStudies";
import { ContactSection } from "@/app/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header transparent position="absolute" />
      <main className="bg-white text-gray-900">
        <HeroSection />
        <VehicleGrid />
        <ServiceScenarios />
        <StatsSection />
        <FeaturedRoutes />
        <CaseStudies />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
