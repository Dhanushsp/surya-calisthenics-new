/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AboutContent } from '../types';
import { Award, Shield, Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  content: AboutContent;
}

export default function About({ content }: AboutProps) {
  const highlights = [
    "10+ Years Calisthenics Mastery",
    "500+ Athletes Coached Globally",
    "Certified Bodyweight Movement Specialist",
    "Expert in Progressive Gymnastic Rings"
  ];

  return (
    <section className="py-24 bg-brand-bg text-brand-text relative border-b border-brand-border" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Premium Two-Image Layout */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            {/* Image 1: Main Coach Photo (Tall Portrait) */}
            <div className="relative w-full sm:w-[55%] aspect-[3/4] rounded-none overflow-hidden border border-brand-border shadow-2xl">
              <img
                src={content.coach_photo}
                alt={content.coach_name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[9px] font-mono tracking-[0.2em] text-white bg-brand-primary border border-brand-primary px-3 py-1 rounded-none uppercase font-bold">
                  LEAD COACH
                </span>
              </div>
            </div>

            {/* Certification / Credential Tag Box (No background image!) */}
            <div className="relative w-full sm:w-[45%] sm:mt-16 bg-brand-card border border-brand-border p-6 shadow-2xl flex flex-col justify-center items-center min-h-[140px] text-center">
              <div className="flex items-center justify-center gap-1.5 mb-2.5 bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-brand-primary">
                <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
                <span className="text-sm font-mono font-black text-brand-text leading-none">4.9</span>
              </div>
              <h5 className="text-[10px] font-mono font-black text-brand-text tracking-[0.25em] uppercase mb-1">
                Credentials
              </h5>
              <p className="text-[10px] text-brand-muted tracking-widest uppercase font-mono font-bold leading-normal">
                500+ Student Reviews
              </p>
              <span className="text-[8px] text-brand-primary font-mono font-bold tracking-widest uppercase mt-2">
                Elite Approved
              </span>
            </div>

            {/* Floating rating widget */}
            <div className="hidden md:block absolute -top-4 -right-2 bg-brand-card border border-brand-border p-4 rounded-none shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-none bg-brand-bg border border-brand-border flex items-center justify-center text-[9px] font-bold text-brand-text font-mono">
                      {i === 3 ? '9+' : <Star className="h-2.5 w-2.5 text-brand-primary fill-brand-primary" />}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-brand-text font-sans">4.9</span>
                    <div className="flex text-brand-primary"><Star className="h-2.5 w-2.5 fill-current" /></div>
                  </div>
                  <span className="text-[9px] text-brand-muted font-mono tracking-wider uppercase block font-bold">500+ Student Reviews</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Bio & Qualifications Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-primary uppercase block mb-3">
              THE INTENSITY ARCHITECT
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic font-normal tracking-tight text-brand-text mb-2 leading-tight">
              {content.coach_name}
            </h2>
            <p className="text-brand-muted font-mono text-[10px] tracking-[0.2em] uppercase mb-8 font-bold">
              {content.coach_title}
            </p>

            <div className="space-y-6 text-brand-muted font-sans text-sm md:text-base leading-relaxed font-light">
              <h3 className="text-lg font-normal text-brand-text font-serif italic tracking-tight">
                {content.bio_heading}
              </h3>
              <p>
                {content.bio_paragraph_1}
              </p>
              <p>
                {content.bio_paragraph_2}
              </p>
            </div>

            {/* Micro List Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 border-t border-brand-border pt-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-brand-primary shrink-0" />
                  <span className="text-xs font-mono font-bold text-brand-text tracking-wide uppercase">{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
