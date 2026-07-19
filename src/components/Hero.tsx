/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeroContent } from '../types';
import { ArrowDown, Flame, ShieldAlert } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
  onCtaClick: () => void;
}

export default function Hero({ content, onCtaClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background Loop GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.background_gif}
          alt="Calisthenics background training loop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 filter brightness-[0.75] contrast-[1.2] grayscale"
        />
        {/* Theme-aligned radial and linear gradients to ensure text is fully readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/95 via-transparent to-brand-bg/95 z-10" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Micro Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none text-[10px] font-mono font-bold tracking-[0.3em] text-brand-primary bg-brand-primary/5 border border-brand-primary/20 mb-8 backdrop-blur-md uppercase"
        >
          <div className="w-1.5 h-1.5 bg-brand-primary animate-pulse" />
          <span>The Gold Standard</span>
        </motion.div>

        {/* Dynamic Headline - Immersive Serif styling */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif italic font-normal tracking-tight text-brand-text mb-6 leading-[0.95]"
        >
          {content.headline}
        </motion.h1>

        {/* Dynamic Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg text-brand-muted max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed tracking-wide"
        >
          {content.subheadline}
        </motion.p>

        {/* CTA Buttons - Grayscale Immersive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 group shadow-xl border border-brand-primary"
          >
            <span>{content.cta_text}</span>
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-1 transition-transform stroke-[2.5px]" />
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-5 bg-brand-card hover:bg-brand-border/45 text-brand-text border border-brand-border text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-75">
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
