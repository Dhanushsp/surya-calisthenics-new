/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeroContent } from '../types';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
  onCtaClick: () => void;
}

export default function Hero({ content, onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-bg flex flex-col md:flex-row md:items-center">
      {/* Mobile Hero Image - shown in full at the top, large and no crop / no fade so the athlete stays fully visible */}
      <div className="md:hidden w-full px-4 pt-4">
        <img
          src={content.mobile_image}
          alt="Athlete performing an explosive calisthenics bar dip"
          className="mx-auto h-auto w-full max-h-[48svh] object-contain"
        />
      </div>

      {/* Desktop Hero Image - anchored left, generous margin so it never crowds the copy */}
      <div className="absolute inset-y-0 left-0 hidden w-[46%] md:block lg:w-[42%] xl:w-[38%]">
        <div className="flex h-full w-full items-center overflow-hidden py-10 pl-6 lg:py-14 lg:pl-10">
          <img
            src={content.desktop_image}
            alt="Athlete performing an explosive calisthenics bar dip"
            className="h-auto max-h-full w-full origin-left scale-[2] object-contain object-left"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-6 text-center md:flex-none md:px-0 md:py-0 md:pl-[26%] md:pr-12 lg:pr-20 xl:max-w-none xl:pl-[39%] xl:pr-5">
        {/* Dynamic Headline - Immersive Serif styling */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="hero-wide-headline mb-3 max-w-full font-serif text-5xl font-normal italic leading-[0.95] tracking-tight text-brand-text sm:mb-6 sm:text-6xl md:text-6xl lg:text-7xl xl:text-[5rem]"
        >
          {content.headline}
        </motion.h1>

        {/* Dynamic Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="hero-wide-copy mx-auto mb-6 max-w-xs font-sans text-xs font-light leading-relaxed tracking-wide text-brand-muted sm:mb-12 sm:max-w-2xl sm:text-base md:max-w-md md:text-base lg:max-w-lg lg:text-lg xl:text-xl"
        >
          {content.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="mx-auto flex w-full items-center justify-center gap-5 md:max-w-md lg:max-w-lg"
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
