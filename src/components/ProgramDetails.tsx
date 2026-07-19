/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProgramContent, ProgramBenefit } from '../types';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramDetailsProps {
  content: ProgramContent;
  onCtaClick: () => void;
}

// Map string icon names to Lucide icons safely and elegantly
const getIconComponent = (iconName: string) => {
  const normalized = iconName.trim().toLowerCase();
  switch (normalized) {
    case 'target':
      return LucideIcons.Target;
    case 'flame':
      return LucideIcons.Flame;
    case 'shield':
      return LucideIcons.Shield;
    case 'zap':
      return LucideIcons.Zap;
    default:
      return LucideIcons.Award;
  }
};

export default function ProgramDetails({ content, onCtaClick }: ProgramDetailsProps) {
  return (
    <section className="py-24 bg-brand-bg text-brand-text relative border-t border-brand-border" id="program">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-primary uppercase block mb-3">
            PROGRAM ARCHITECTURE
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic font-normal tracking-tight text-brand-text mb-4 leading-tight">
            {content.section_title}
          </h2>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed font-light">
            {content.section_subtitle}
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Program Image + Overlaid Feature Badges */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-brand-border shadow-2xl bg-brand-card">
              <img
                src={content.supporting_image}
                alt="Calisthenics workout rings and equipment"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-transparent to-transparent" />
              
              {/* Overlaid stats box */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-card border border-brand-border p-5 rounded-none backdrop-blur-md">
                <h4 className="text-xs font-mono font-bold text-brand-primary mb-2 tracking-[0.1em] uppercase">
                  ⚡ All-Inclusive Mobile Access
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Includes full HD video exercise catalogs, active form-check queues, customized progress trackers, and real-time messaging directly with Coach Alex.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Features/Benefits list */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.points.map((point: ProgramBenefit, index: number) => {
                const IconComponent = getIconComponent(point.icon);
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="p-6 rounded-none bg-brand-card border border-brand-border hover:border-brand-primary/40 transition-all flex flex-col gap-4 shadow-2xl"
                  >
                    {/* Icon Badge */}
                    <div className="h-10 w-10 rounded-none bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                      <IconComponent className="h-4 w-4" />
                    </div>

                    {/* Benefit Text */}
                    <div>
                      <h3 className="text-base font-serif italic font-normal text-brand-text tracking-tight mb-2">
                        {point.title}
                      </h3>
                      <p className="text-brand-muted text-xs md:text-sm leading-relaxed font-light">
                        {point.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct CTA under features */}
            <div className="p-6 md:p-8 bg-brand-card rounded-none border border-brand-border mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-serif italic font-normal text-brand-text tracking-tight mb-1">
                  Ready to test your limits?
                </h4>
                <p className="text-xs text-brand-muted font-mono tracking-wider uppercase font-bold">
                  Applications are reviewed in real-time. Only 8 spots remaining for this cohort.
                </p>
              </div>
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-all rounded-none cursor-pointer text-center border border-brand-primary"
              >
                Apply for Cohort
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
