"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { config } from '@/lib/config';
import SocialIcons from './social-icons';

interface HeroSectionProps {
  onProgress: (progress: number) => void;
  onLoaded: () => void;
}

const TOTAL_FRAMES = 240;
const FRAME_URL_BASE = 'https://ekmepjadtgoemytvbpnk.supabase.co/storage/v1/object/public/Webp%20Sequence/frame_';

const getFrameUrl = (frame: number) => {
  return `${FRAME_URL_BASE}${String(frame).padStart(3, '0')}_delay-0.042s.webp`;
};

export default function HeroSection({ onProgress, onLoaded }: HeroSectionProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const urls = Array.from({ length: TOTAL_FRAMES }, (_, i) => getFrameUrl(i));
    setImageUrls(urls);

    let processedCount = 0;
    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
      const onProcessed = () => {
        processedCount++;
        const progress = (processedCount / TOTAL_FRAMES) * 100;
        onProgress(progress);
        if (processedCount === TOTAL_FRAMES) {
          onLoaded();
        }
      };
      img.onload = onProcessed;
      img.onerror = onProcessed;
    });
  }, [onProgress, onLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollFraction = scrollTop / (scrollHeight - clientHeight);
      
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollFraction * TOTAL_FRAMES * 2.5) // Adjust multiplier for scroll speed
      );
      
      setCurrentFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <section ref={scrollContainerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden rounded-b-2xl">
        <Image
          src={getFrameUrl(currentFrame)}
          alt="Parallax background sequence"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col justify-end gap-32 p-8 md:p-12 lg:p-16">
          <div className="flex justify-between items-end gap-8">
            {/* Left Block */}
            <div className="flex flex-col justify-start text-left">
              <p className="font-headline text-lg text-primary">{config.introLine}</p>
              <h1 className="font-headline text-5xl font-bold tracking-tighter leading-none whitespace-pre-wrap">
                {config.hero.title}
              </h1>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-sm">
                {config.hero.skills.map((skill) => (
                  <div key={skill.id}>
                    <p className="font-bold text-muted-foreground">{skill.id}</p>
                    <p className="font-medium">{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Block */}
            <div className="hidden md:flex flex-col justify-center items-end text-right max-w-sm lg:max-w-md">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold">
                {config.hero.subheadline}
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {config.hero.description}
              </p>
            </div>
          </div>
          
          {/* Bottom Social Icons */}
          <div className="flex justify-center pb-4">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
