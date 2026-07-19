/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Zap, TrendingUp, Sparkles, ArrowLeftRight } from 'lucide-react';
import { TransformationItem } from '../types';

interface TransformationsProps {
  items: TransformationItem[];
}

export default function Transformations({ items }: TransformationsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);   // whole section — used for vertical scroll progress
  const trackRef = useRef<HTMLDivElement>(null);     // the flex row that actually gets transformed

  const [isDragging, setIsDragging] = useState(false); // only used for cursor styling

  // Motion state lives in refs (not React state) so the animation loop
  // never triggers re-renders — this is what keeps it frame-drop free.
  const isDraggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const dragStartTranslateRef = useRef(0);

  const currentXRef = useRef(0); // current translateX (px, negative)
  const targetXRef = useRef(0);  // where currentX is easing toward
  const setWidthRef = useRef(0); // px width of ONE full set of items
  const initializedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Triplicate the items so the track always has a "previous" and "next"
  // copy to slide into — this is what makes the loop seamless no matter
  // how many items are passed in.
  const loopedItems = items.length > 0 ? [...items, ...items, ...items] : [];

  const applyTransform = (x: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
    }
  };

  // Measure one set's width and center the track on the middle copy.
  useEffect(() => {
    if (items.length === 0) return;

    const measure = () => {
      if (!trackRef.current) return;
      const w = trackRef.current.scrollWidth / 3;
      setWidthRef.current = w;
      if (!initializedRef.current && w > 0) {
        initializedRef.current = true;
        currentXRef.current = -w;
        targetXRef.current = -w;
        applyTransform(-w);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [items.length]);

  // Core animation loop: eases currentX toward targetX every frame, and
  // silently wraps the position by one set-width whenever it crosses a
  // boundary — this is the "infinite loop" mechanism.
  useEffect(() => {
    if (items.length === 0) return;

    const tick = () => {
      const w = setWidthRef.current;
      if (w > 0) {
        const diff = targetXRef.current - currentXRef.current;

        if (isDraggingRef.current) {
          currentXRef.current = targetXRef.current;
        } else if (Math.abs(diff) > 0.05) {
          currentXRef.current += diff * 0.12; // easing factor — tweak for feel
        }

        // Seamless wrap: keep currentX (and target/drag anchors) within
        // one set-width of the middle copy, forever, regardless of
        // item count.
        if (currentXRef.current <= -2 * w) {
          currentXRef.current += w;
          targetXRef.current += w;
          dragStartTranslateRef.current += w;
        } else if (currentXRef.current > 0) {
          currentXRef.current -= w;
          targetXRef.current -= w;
          dragStartTranslateRef.current -= w;
        }

        applyTransform(currentXRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [items.length]);

  // Vertical page-scroll → horizontal target sync (replaces direct
  // scrollLeft writes with a target the rAF loop eases toward).
  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      if (isDraggingRef.current || !sectionRef.current) return;
      const w = setWidthRef.current;
      if (!w) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalDistance = viewportHeight + rect.height;
        const currentDistance = viewportHeight - rect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
        // Slide through the middle copy as the page scrolls; the rAF
        // loop above handles wrapping if this ever pushes past a boundary.
        targetXRef.current = -w - progress * w;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  // Unified pointer handlers (covers mouse + touch + pen in one path).
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    pointerStartXRef.current = e.clientX;
    dragStartTranslateRef.current = currentXRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = (e.clientX - pointerStartXRef.current) * 1.4; // drag sensitivity
    targetXRef.current = dragStartTranslateRef.current + delta;
  };

  const endDrag = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20 bg-brand-bg overflow-hidden relative border-t border-b border-brand-border"
      id="transformations"
    >
      {/* Section Header - Clean, Compact, Highly readable */}
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-primary uppercase block mb-1.5">
              ATHLETE EVOLUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif italic font-normal tracking-tight text-brand-text leading-tight">
              Before & After Gallery
            </h2>
            <p className="text-brand-muted text-xs md:text-sm max-w-lg mt-2 font-light">
              Scroll down the page to watch our athletes evolve, or drag/swipe horizontally on any device to browse manually.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4 font-mono text-[9px] text-brand-primary bg-brand-primary/5 border border-brand-primary/20 px-4 py-2 rounded-none uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-brand-primary" /> Performance-Linked</span>
            <span className="h-3 w-px bg-brand-border" />
            <span className="flex items-center gap-1.5"><ArrowLeftRight className="h-3 w-3 text-brand-primary animate-pulse" /> Scroll to Move</span>
          </div>
        </div>
      </div>

      {/* Swipeable & Scroll-Synced Track (transform-driven, infinite loop) */}
      <div className="relative w-full overflow-hidden">

        {/* Soft edge blur fading on left/right borders */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-brand-bg via-brand-bg/40 to-transparent z-10 pointer-events-none" />

        {/* Draggable viewport — overflow hidden, no native scrollbar/scroll-snap needed */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          className={`overflow-hidden px-6 md:px-16 py-4 touch-pan-y ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
        >
          {/* The actual sliding track — position controlled entirely via translate3d */}
          <div ref={trackRef} className="flex gap-4 md:gap-6 will-change-transform">
            {loopedItems.map((item, idx) => {
              const originalIdx = idx % items.length;
              const stage = (item.stage || (originalIdx % 2 === 0 ? 'BEFORE' : 'AFTER')).toUpperCase();
              const duration = item.duration || '12 Weeks';
              const program = item.program || 'TRANSFORMATION';

              return (
                <motion.div
                  key={idx}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="w-[180px] xs:w-[210px] sm:w-[230px] md:w-[250px] shrink-0 bg-brand-card border border-brand-border rounded-none overflow-hidden relative group shadow-md flex flex-col justify-between transition-all duration-300 hover:border-brand-primary/45"
                >
                  {/* Card Header */}
                  <div className="p-3 border-b border-brand-border bg-brand-card/50">
                    <div className="flex items-center justify-between text-[8px] font-mono text-brand-muted tracking-wider mb-1">
                      <span className={`inline-flex items-center gap-0.5 font-bold tracking-widest uppercase text-[7px] px-2 py-0.5 ${
                        stage === 'AFTER'
                          ? 'bg-brand-primary text-white font-extrabold'
                          : 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                      }`}>
                        {stage === 'AFTER' && <Sparkles className="h-2 w-2" />}
                        {stage}
                      </span>
                      <span className="font-bold">{duration}</span>
                    </div>
                    <h4 className="text-xs md:text-sm font-serif italic font-normal text-brand-text tracking-tight truncate">
                      {item.name}
                    </h4>
                  </div>

                  {/* Proportional Image Frame */}
                  <div className="relative aspect-square overflow-hidden bg-brand-bg border-b border-brand-border">
                    <img
                      src={item.img}
                      alt={`${item.name} ${stage}`}
                      loading="lazy"
                      draggable={false}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none ${
                        stage === 'BEFORE'
                          ? 'filter brightness-[0.85] contrast-[1.05]'
                          : 'filter brightness-[0.95] contrast-[1.1]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Description */}
                  <div className="p-3 bg-brand-card flex-grow flex flex-col justify-between">
                    <p className="text-brand-muted text-[10px] md:text-xs leading-relaxed font-light mb-2.5 min-h-[30px] line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-[8px] font-mono text-brand-muted tracking-wider pt-2 border-t border-brand-border">
                      <span className="opacity-80">PROGRAM</span>
                      <span className="text-brand-primary font-bold tracking-widest uppercase text-[8px] font-mono">{program}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle touch indicator */}
      <div className="flex justify-center items-center gap-1.5 mt-2.5 text-[9px] font-mono text-brand-muted uppercase tracking-widest opacity-60">
        <ArrowLeftRight className="h-2.5 w-2.5 animate-pulse" />
        <span>Swipe or scroll page vertically</span>
      </div>
    </section>
  );
}