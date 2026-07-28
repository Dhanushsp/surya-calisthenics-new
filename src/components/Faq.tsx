/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, HelpCircle } from 'lucide-react';
import { FaqContent } from '../types';

interface FaqProps {
  content: FaqContent;
}

export default function Faq({ content }: FaqProps) {
  const { items, section_eyebrow, section_title, section_subtitle } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) {
    return null;
  }

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 bg-brand-bg text-brand-text relative border-t border-brand-border" id="faq">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Header - mirrors Program Architecture styling */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-[0.3em] text-brand-primary uppercase mb-3">
            <HelpCircle className="h-3 w-3 text-brand-primary" /> {section_eyebrow}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic font-normal tracking-tight text-brand-text mb-4 leading-tight">
            {section_title}
          </h2>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed font-light">
            {section_subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-brand-card border rounded-none overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-brand-primary/50' : 'border-brand-border'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-8 md:py-6 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest pt-1 shrink-0 transition-colors duration-300 ${
                        isOpen ? 'text-brand-primary' : 'text-brand-muted'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base md:text-lg font-serif italic font-normal text-brand-text tracking-tight leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`h-7 w-7 shrink-0 flex items-center justify-center border rounded-none transition-colors duration-300 ${
                      isOpen
                        ? 'bg-brand-primary border-brand-primary text-white'
                        : 'border-brand-border text-brand-primary group-hover:border-brand-primary/50'
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-7 pl-[3.25rem] md:pl-[3.75rem]">
                        <p className="text-brand-muted text-sm md:text-base leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
