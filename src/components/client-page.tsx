"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import LoadingScreen from '@/components/loading-screen';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/learning-paths';
import ProjectsSection from '@/components/projects-section';
import Testimonials from '@/components/testimonials';
import FaqSection from '@/components/faq-section';
import CtaSection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function ClientPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleLoaded = () => {
    // A small delay to ensure the loading bar hits 100% and the animation out is smooth.
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} progress={progress} />
      <div className={cn('transition-opacity duration-1000 ease-in-out', isLoading ? 'opacity-0' : 'opacity-100')}>
        <HeroSection onProgress={setProgress} onLoaded={handleLoaded} />
        <main>
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <Testimonials />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
