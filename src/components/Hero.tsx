/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeroContent } from '../types';
import { ArrowDown } from 'lucide-react';
import desktopHero from '../images/desktop-hero.png';
import mobileHero from '../images/mobile-hero.png';

interface HeroProps {
  content: HeroContent;
  onCtaClick: () => void;
}

export default function Hero({ content, onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-bg flex flex-col md:flex-row md:items-center">
      {/* Mobile Hero Image - shown in full at the top, large and no crop / no fade so the athlete stays fully visible */}
      <div className="md:hidden w-full pt-4 px-4">
        <img
          src={mobileHero}
          alt="Athlete performing an explosive calisthenics bar dip"
          className="w-full h-auto max-h-[62vh] object-contain mx-auto"
        />
      </div>

      {/* Desktop Hero Image - anchored left, generous margin so it never crowds the copy */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[42%] lg:w-[38%]">
        <div className="h-full w-full py-10 lg:py-14 pl-6 lg:pl-10">
          <img
            src={desktopHero}
            alt="Athlete performing an explosive calisthenics bar dip"
            className="h-full w-full object-cover object-left"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:pl-[46%] md:pr-12 lg:pr-20 flex flex-col items-center text-center md:items-end md:text-center md:flex-none pt-6 pb-14 md:py-0">
        {/* Dynamic Headline - Immersive Serif styling */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-serif italic font-normal tracking-tight text-brand-text mb-3 sm:mb-6 leading-[0.95]"
        >
          {content.headline}
        </motion.h1>

        {/* Dynamic Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-xs sm:text-base md:text-base lg:text-lg text-brand-muted max-w-xs sm:max-w-2xl md:max-w-md lg:max-w-lg mx-auto md:mx-0 mb-6 sm:mb-12 font-sans font-light leading-relaxed tracking-wide"
        >
          {content.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex items-center justify-center gap-5 w-full md:max-w-md lg:max-w-lg mx-auto md:mx-0 "
        >
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 group shadow-xl border border-brand-primary rounded-xl"
          >
            <span>{content.cta_text}</span>
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-1 transition-transform stroke-[2.5px]" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator - desktop only to keep the mobile fade area clean */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 opacity-75">
        <span className="text-[9px] font-mono tracking-[0.25em] text-brand-muted uppercase font-bold">Scroll to unlock</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-5 w-[2px] bg-brand-primary"
        />
      </div>
    </section>
  );
}
