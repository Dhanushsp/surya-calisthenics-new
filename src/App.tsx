/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WebsiteContent } from './types';
import { DEFAULT_CONTENT, parseContentTxt } from './utils/parser';

// Core layout section components
import Hero from './components/Hero';
import FloatingCta from './components/FloatingCta';
import Transformations from './components/Transformations';
import VideoTestimonials from './components/VideoTestimonials';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Reviews from './components/Reviews';
import ProgramDetails from './components/ProgramDetails';
import Footer from './components/Footer';
import JoinForm from './components/JoinForm';

// Lucide icon imports
import { X, Award, Flame, Zap, ShieldCheck } from 'lucide-react';

export default function App() {
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch and parse content.txt on mount
  useEffect(() => {
    fetch('/content.txt')
      .then((res) => {
        if (!res.ok) throw new Error('File fetch returned ' + res.status);
        return res.text();
      })
      .then((text) => {
        const parsed = parseContentTxt(text);
        setContent(parsed);
        setLoading(false);
      })
      .catch((error) => {
        console.warn('Network issue fetching content.txt, applying premium local cache: ', error);
        setContent(DEFAULT_CONTENT);
        setLoading(false);
      });
  }, []);

  const triggerSignupPortal = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdk2ypkGUNJOYUwSAfm_Nun9gGeS0zgC4ycJyEtLlRJC1NV2g/viewform';
  };

  // Graceful initial loader screen
  if (loading || !content) {
    return (
      <div className="h-screen w-screen bg-brand-bg flex flex-col items-center justify-center text-brand-text font-mono">
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-8 w-8 border-2 border-brand-primary border-t-transparent animate-spin" />
          <span className="text-[10px] tracking-[0.25em] text-brand-muted font-bold">LOADING DIGITAL CORE...</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen text-brand-text font-sans antialiased selection:bg-brand-primary selection:text-white scroll-smooth">
      
      {/* 1. Hero Section */}
      <Hero content={content.hero} onCtaClick={triggerSignupPortal} />

      {/* 2. Persistent Floating CTA */}
      <FloatingCta content={content.floating_cta} onClick={triggerSignupPortal} />

      {/* 3. Client Transformations Gallery */}
      <Transformations items={content.transformations} />

      {/* Video Testimonials Carousel */}
      <VideoTestimonials content={content.videoTestimonials} />

      {/* 4. About the Coach */}
      <About content={content.about} />

      {/* 5. Video Section */}
      <VideoSection content={content.video} />

      {/* 6. Reviews / Testimonials (Infinite Marquee) */}
      <Reviews items={content.reviews} />

      {/* 7. Program Details */}
      <ProgramDetails content={content.program} onCtaClick={triggerSignupPortal} />

      {/* Dedicated On-Page Signup Segment (for structural completeness and anchor targets) */}
      <section className="py-24 bg-brand-bg border-t border-brand-border px-6 relative" id="enrollment-portal">
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-12">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-muted uppercase block mb-3">
            SECURE YOUR SPOT
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic font-normal tracking-tight text-brand-text">
            Apply For Personal Coaching
          </h2>
          <p className="text-brand-muted text-sm max-w-lg mx-auto mt-4 font-light">
            Submit your profile. Coach Alex personally reviews every submission via Instagram to maintain high program standards.
          </p>
        </div>

        <div className="max-w-xl mx-auto relative z-10">
          <JoinForm />
        </div>
      </section>

      {/* 8. Footer */}
      <Footer content={content.footer} onJoinCtaClick={triggerSignupPortal} />

      {/* Modal Popup Sign-Up Portal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Dark glassmorphic backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-xl z-10 bg-[#0D0D0D] border border-white/10 rounded-none overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-50 text-zinc-400 hover:text-white bg-black hover:bg-white/5 p-2 rounded-none border border-white/10 transition-all cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Form Content */}
              <JoinForm onSuccessClose={() => setIsModalOpen(false)} isModal={true} />
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
