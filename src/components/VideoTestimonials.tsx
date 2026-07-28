/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ShieldCheck, Film, X, Play, ChevronUp, ChevronDown } from 'lucide-react';
import { VideoTestimonialsContent } from '../types';

interface VideoTestimonialsProps {
  content: VideoTestimonialsContent;
}

export default function VideoTestimonials({ content }: VideoTestimonialsProps) {
  const { items, section_eyebrow, section_title, section_subtitle } = content;

  if (items.length === 0) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [direction, setDirection] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentClient = items[activeIndex];
  const currentVideoId = currentClient.videos[activeVideoIndex] || currentClient.id;

  const getIndex = (offset: number) => {
    return (activeIndex + offset + items.length) % items.length;
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveVideoIndex(0);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveVideoIndex(0);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevVideo = () => {
    const totalVideos = currentClient.videos.length;
    setActiveVideoIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };

  const handleNextVideo = () => {
    const totalVideos = currentClient.videos.length;
    setActiveVideoIndex((prev) => (prev + 1) % totalVideos);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const dx = info.offset.x;
    const dy = info.offset.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx < -swipeThreshold) {
        handleNext();
      } else if (dx > swipeThreshold) {
        handlePrev();
      }
    } else if (isExpanded) {
      if (dy < -swipeThreshold) {
        handleNextVideo();
      } else if (dy > swipeThreshold) {
        handlePrevVideo();
      }
    }
  };

  const centerEmbedUrl = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${currentVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&showinfo=0&disablekb=1&fs=0&enablejsapi=1&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}`;

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      let data;
      try {
        data = JSON.parse(e.data);
      } catch {
        return;
      }

      if (data.event === 'onReady' && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
          '*'
        );
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: isMuted ? 'mute' : 'unMute',
            args: ''
          }),
          '*'
        );
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [activeIndex, activeVideoIndex, isMuted, isExpanded]);

  return (
    <section className="py-14 md:py-20 bg-brand-bg text-brand-text relative border-b border-brand-border overflow-hidden" id="video-testimonials">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-[0.3em] text-brand-primary uppercase mb-1.5">
          <Film className="h-3 w-3 text-brand-primary" /> {section_eyebrow}
        </span>
        <h2 className="text-3xl md:text-5xl font-serif italic font-normal tracking-tight text-brand-text">
          Progress in <span className="text-brand-primary">Motion</span>
        </h2>
        <p className="text-brand-muted text-xs md:text-sm max-w-sm mx-auto mt-1.5 font-light">
          Watch real training clips from my students as they build strength, master new skills, and progress through every stage of their calisthenics journey.
        </p>
      </div>

      <div className="flex justify-center items-center px-6">
        <motion.div
          onClick={() => setIsExpanded(true)}
          animate={{
            boxShadow: [
              '0 0 0 0px rgba(225, 29, 72, 0.4)',
              '0 0 0 12px rgba(225, 29, 72, 0)',
              '0 0 0 0px rgba(225, 29, 72, 0)'
            ],
            scale: [1, 1.015, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[9/16] bg-black border-2 border-brand-primary cursor-pointer overflow-hidden shadow-2xl flex items-center justify-center group"
        >
          <img
            src={`https://img.youtube.com/vi/${currentClient.videos[0]}/hqdefault.jpg`}
            alt={currentClient.athlete}
            className="w-full h-full object-cover opacity-80 filter brightness-75 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-14 w-14 rounded-full bg-brand-primary border border-white/20 flex items-center justify-center text-white shadow-xl"
            >
              <Play className="h-6 w-6 fill-white text-white ml-1" />
            </motion.div>
            <span className="text-[9px] font-mono tracking-[0.25em] text-white uppercase bg-black/60 px-3 py-1 border border-white/15">
              TAP TO REEL
            </span>
          </div>

          <div className="absolute bottom-4 left-4 z-10">
            <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase">
              {currentClient.athlete}
            </h4>
            <p className="text-[8px] font-mono text-brand-primary uppercase font-bold tracking-wider">
              {currentClient.duration}
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col h-full w-full overflow-hidden select-none"
          >
            <div className="relative h-[72vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <iframe
                key={`${activeIndex}-${activeVideoIndex}-${isMuted ? 'm' : 'u'}`}
                ref={iframeRef}
                src={centerEmbedUrl}
                title={`${currentClient.athlete} progression`}
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full object-cover"
                style={{ border: 'none' }}
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing bg-transparent"
              />

              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-50 text-white bg-black/50 border border-white/20 p-2 rounded-full hover:bg-black/80 transition-colors cursor-pointer"
                title="Close testimonial player"
              >
                <X className="h-5 w-5" />
              </button>

              {currentClient.videos.length > 1 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 bg-black/40 border border-white/10 p-2 rounded-full">
                  <button onClick={handlePrevVideo} className="text-white hover:text-brand-primary">
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  {currentClient.videos.map((_, vidx) => (
                    <div
                      key={vidx}
                      className={`h-2 rounded-full transition-all duration-300 ${vidx === activeVideoIndex ? 'w-2 bg-brand-primary' : 'w-1.5 bg-zinc-600'}`}
                    />
                  ))}
                  <button onClick={handleNextVideo} className="text-white hover:text-brand-primary">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              )}

              <div className="absolute bottom-4 left-4 z-40 bg-black/60 border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-widest text-zinc-300">
                Swipe ↕ videos • Swipe ↔ clients
              </div>

              <div className="absolute bottom-4 right-4 z-40">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  className="h-10 w-10 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="h-4.5 w-4.5 text-rose-400" />
                  ) : (
                    <Volume2 className="h-4.5 w-4.5 text-emerald-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="h-[28vh] w-full bg-[#0D0D0D] border-t border-white/10 p-5 flex flex-col justify-center text-white relative z-40">
              <div className="flex items-center gap-1 mb-2">
                {items.map((_, cidx) => (
                  <div
                    key={cidx}
                    className={`h-1 rounded-none transition-all duration-300 ${cidx === activeIndex ? 'w-4 bg-brand-primary' : 'w-1 bg-zinc-600'}`}
                  />
                ))}
                <span className="text-[8px] font-mono text-brand-primary uppercase font-bold tracking-wider ml-2">
                  Client {activeIndex + 1} of {items.length}
                </span>
              </div>

              <span className="text-[8px] font-mono text-zinc-400 tracking-[0.2em] uppercase block mb-1">
                {currentClient.duration} • <span className="text-brand-primary font-bold">VERIFIED PROTOCOL</span>
              </span>

              <h3 className="text-lg font-serif italic text-white font-normal leading-tight">
                {currentClient.athlete}
              </h3>

              <p className="text-[9px] font-mono tracking-wider text-brand-primary uppercase font-bold mb-1">
                {currentClient.skill}
              </p>

              <p className="text-zinc-400 text-[11px] leading-relaxed font-light overflow-y-auto max-h-[60px] pr-2">
                {currentClient.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-md mx-auto px-6 text-center mt-6">
        <div className="flex items-center justify-center gap-1.5 mb-1 text-[9px] font-mono text-brand-muted uppercase font-bold">
          <span>{currentClient.duration}</span>
          <span>•</span>
          <span className="inline-flex items-center gap-0.5 text-brand-primary">
            <ShieldCheck className="h-2.5 w-2.5 text-brand-primary" /> VERIFIED ATHLETE
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-serif italic text-brand-text font-normal leading-snug">
          {currentClient.athlete}
        </h3>

        <p className="text-[10px] font-mono tracking-wider text-brand-primary uppercase font-bold mb-1">
          {currentClient.skill}
        </p>

        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-light max-w-sm mx-auto">
          {currentClient.desc}
        </p>

        <div className="flex items-center justify-center gap-1.5 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
                setActiveVideoIndex(0);
              }}
              className={`h-0.5 transition-all duration-300 rounded-none cursor-pointer ${index === activeIndex ? 'w-5 bg-brand-primary' : 'w-1.5 bg-brand-border'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
