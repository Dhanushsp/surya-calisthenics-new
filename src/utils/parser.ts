/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  WebsiteContent,
  TransformationItem,
  ReviewItem,
  ProgramBenefit,
  HeroContent,
  FloatingCtaContent,
  AboutContent,
  VideoContent,
  ProgramContent,
  FooterContent,
  VideoTestimonialItem,
  VideoTestimonialsContent,
  FaqItem,
  FaqContent
} from '../types';

// Robust high-quality defaults matching the content.txt
export const DEFAULT_CONTENT: WebsiteContent = {
  hero: {
    headline: "Command Total Body Control",
    subheadline: "Build raw strength, a shredded physique, and explosive bodyweight skill — mastered rep by rep with elite calisthenics coaching.",
    background_gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVqamNsbGF0OHFhcWlzMTBmaDVodTN2Zms3a2l3Mmt4ZGR3ZjhsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKrEzvLbsVAud8I/giphy.gif",
    desktop_image: "/images/desktop-hero.png",
    mobile_image: "/images/mobile-hero.png",
    cta_text: "Start Your Transformation",
  },
  floating_cta: {
    button_text: "Join Program Now",
  },
  transformations: [
    {
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
      name: "Marcus T. - 12 Weeks",
      desc: "Went from 0 to 12 clean pull-ups, dropping 8% body fat."
    },
    {
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      name: "Sarah K. - 16 Weeks",
      desc: "Achieved a solid 15-second freestanding handstand and elite core power."
    },
    {
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
      name: "Alex R. - 24 Weeks",
      desc: "Mastered the full muscle-up and unlocked advanced gymnastic ring flows."
    },
    {
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
      name: "David L. - 8 Weeks",
      desc: "Rebuilt posture, cured shoulder pain, and unlocked elite body control."
    }
  ],
  about: {
    coach_name: "Coach Surya",
    coach_title: "Elite Calisthenics Specialist & Founder",
    coach_photo: "/images/coach.jpeg",
    certification_photo: "/images/certificate.jpeg",
    bio_heading: "Meet Your Coach",
    bio_paragraph_1: "Hey, I'm Surya. I spent over a decade perfecting bodyweight training to unlock movements most think are reserved for elite gymnasts. My mission is to demystify advanced calisthenics, turning complex skills into scientific, progressive training steps anyone can follow.",
    bio_paragraph_2: "Having coached over 500+ athletes worldwide through mobile-optimized virtual programs, I focus on building raw, functional strength, bulletproofing joints, and developing a shredded, high-performance physique without the need for heavy weights."
  },
  video: {
    youtube_id: "Z8wZg76B2uM",
    video_title: "Calisthenics Masterclass & Progression Secrets"
  },
  reviews: [
    {
      text: "This program is incredible! I went from struggling with basic pushups to mastering the handstand pushup. The mobile layout makes it so easy to follow in the park.",
      author: "Marcus T."
    },
    {
      text: "Surya's step-by-step progressions solved my shoulder pain and unlocked my first ever muscle-up! Truly life-changing body control.",
      author: "Sarah K."
    },
    {
      text: "Absolutely mind-blowing results. I've gained 5kg of solid muscle and feel stronger and lighter than ever. The support is elite.",
      author: "Alex R."
    },
    {
      text: "Excellent coaching. The weekly video form checks are highly detailed. It feels like having Surya right there on the bars with me.",
      author: "Liam P."
    },
    {
      text: "Most fitness programs are boring. Calisthenics builds skill, coordination, and a highly aesthetic physique. Best coaching out there.",
      author: "Elena G."
    }
  ],
  program: {
    section_title: "The Bodyweight Athlete Protocol",
    section_subtitle: "A comprehensive, mobile-first training environment engineered for rapid skill acquisition and raw strength.",
    supporting_image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    points: [
      {
        icon: "Target",
        title: "Skill-Based Progressions",
        text: "Master high-level skills like the Handstand, Muscle-Up, and Planche with personalized, joint-safe progressive stages."
      },
      {
        icon: "Flame",
        title: "Hypertrophy & Fat Loss",
        text: "Build a dense, functional, and highly defined athletic physique using targeted bodyweight resistance protocols."
      },
      {
        icon: "Shield",
        title: "Joint Bulletproofing",
        text: "Strengthen your wrists, elbows, and shoulders with expert mobility and active flexibility routines to prevent injury."
      },
      {
        icon: "Zap",
        title: "Mobile Training Hub",
        text: "Access your daily workouts, HD demonstration videos, and submit direct video form checks, optimized for the outdoor park."
      }
    ]
  },
  footer: {
    instagram_url: "https://instagram.com/calisthenicscoach",
    youtube_url: "https://www.youtube.com",
    contact_email: "contact@bodyweightathlete.com",
    contact_phone: "+1 (555) 019-3829",
    copyright: "© 2026 Surya Calisthenics. All rights reserved.",
    secondary_cta_text: "Follow on Instagram",
    youtube_cta_text: "Subscribe on YouTube"
  },
  videoTestimonials: {
    section_eyebrow: "Proofs & Progress",
    section_title: "Athletes on the Bars",
    section_subtitle: "Drag or swipe the video horizontally to slide through progress clips.",
    items: [
      {
        athlete: "Marcus T.",
        skill: "Front Lever & Muscle-Up Mastery",
        duration: "12 Weeks Protocol",
        desc: "Demonstrating solid 10-second front levers and explosive bar muscle-ups with perfect mechanics.",
        id: "78zo1AeWSc8",
        videos: ["78zo1AeWSc8", "tpEe10R1f0Y", "p9gYwJ8I9uY"]
      },
      {
        athlete: "Sarah K.",
        skill: "Freestanding Handstand Balance",
        duration: "16 Weeks Protocol",
        desc: "Showcasing pristine shoulder stability and body alignment during an active freestanding hold.",
        id: "p9gYwJ8I9uY",
        videos: ["p9gYwJ8I9uY", "EGMG_7m_xH4"]
      },
      {
        athlete: "Alex R.",
        skill: "Gymnastic Ring False-Grip Flow",
        duration: "24 Weeks Protocol",
        desc: "Seamless flow through ring muscle-ups, clean static support holds, and stable shoulder stands.",
        id: "EGMG_7m_xH4",
        videos: ["EGMG_7m_xH4", "j71XgK-9Kco"]
      },
      {
        athlete: "David L.",
        skill: "Overhead Mobility Restoration",
        duration: "8 Weeks Protocol",
        desc: "Showing pain-free overhead extensions and fluid press movements after resolving severe impingement.",
        id: "j71XgK-9Kco",
        videos: ["j71XgK-9Kco", "78zo1AeWSc8"]
      }
    ]
  },
  faq: {
    section_eyebrow: "Common Questions",
    section_title: "Frequently Asked Questions",
    section_subtitle: "Everything you need to know before you start your bodyweight transformation.",
    items: [
      {
        question: "Can beginners join?",
        answer: "Yes, every exercise is scalable to match your current fitness level with beginner-friendly progressions."
      },
      {
        question: "Do I need a gym?",
        answer: "No, you can train anywhere using your body weight, though a pull-up bar or resistance bands help."
      },
      {
        question: "Can I lose fat?",
        answer: "Yes, high-energy bodyweight workouts burn calories, boost your metabolism, and help strip body fat."
      },
      {
        question: "Can I build muscle?",
        answer: "Yes, by applying progressive overload with tougher variations and leverage, you will build lean muscle."
      },
      {
        question: "How many days per week?",
        answer: "3 to 4 days per week is ideal for steady progress and proper recovery."
      },
      {
        question: "Do you provide nutrition?",
        answer: "Yes, I provide clear nutrition guidelines and calorie/macro targets to support your goals."
      }
    ]
  }
};

/**
 * Parses INI formatted content from content.txt
 */
export function parseContentTxt(text: string): WebsiteContent {
  const result: any = {};
  let currentSection = '';
  
  const lines = text.split(/\r?\n/);
  
  for (const rawLine of lines) {
    const line = rawLine.trim();
    
    // Skip empty lines and comments
    if (!line || line.startsWith('#') || line.startsWith(';')) {
      continue;
    }
    
    // Check for section header: [SECTION]
    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).trim().toUpperCase();
      result[currentSection] = result[currentSection] || {};
      continue;
    }
    
    if (currentSection) {
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const key = line.slice(0, eqIdx).trim();
        const val = line.slice(eqIdx + 1).trim();
        result[currentSection][key] = val;
      }
    }
  }

  // Construct structured WebsiteContent
  const hero: HeroContent = {
    headline: result.HERO?.headline || DEFAULT_CONTENT.hero.headline,
    subheadline: result.HERO?.subheadline || DEFAULT_CONTENT.hero.subheadline,
    background_gif: result.HERO?.background_gif || DEFAULT_CONTENT.hero.background_gif,
    desktop_image: result.HERO?.desktop_image || DEFAULT_CONTENT.hero.desktop_image,
    mobile_image: result.HERO?.mobile_image || DEFAULT_CONTENT.hero.mobile_image,
    cta_text: result.HERO?.cta_text || DEFAULT_CONTENT.hero.cta_text,
  };

  const floating_cta: FloatingCtaContent = {
    button_text: result.FLOATING_CTA?.button_text || DEFAULT_CONTENT.floating_cta.button_text,
  };

  // Build transformations dynamically
  const transformations: TransformationItem[] = [];
  const transformationSource = result.TRANSFORMATIONS || {};
  const transformationIndices = Object.keys(transformationSource)
    .map((key) => key.match(/^trans_(\d+)_img$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => Number.parseInt(match[1], 10))
    .sort((a, b) => a - b);

  for (const i of transformationIndices) {
    const imgKey = `trans_${i}_img`;
    const nameKey = `trans_${i}_name`;
    const descKey = `trans_${i}_desc`;
    const stageKey = `trans_${i}_stage`;
    const durationKey = `trans_${i}_duration`;
    const programKey = `trans_${i}_program`;

    transformations.push({
      img: transformationSource[imgKey],
      name: transformationSource[nameKey] || `Transformation #${i}`,
      desc: transformationSource[descKey] || '',
      stage: transformationSource[stageKey] || '',
      duration: transformationSource[durationKey] || '',
      program: transformationSource[programKey] || '',
    });
  }
  
  if (transformations.length === 0) {
    transformations.push(...DEFAULT_CONTENT.transformations);
  }

  const about: AboutContent = {
    coach_name: result.ABOUT?.coach_name || DEFAULT_CONTENT.about.coach_name,
    coach_title: result.ABOUT?.coach_title || DEFAULT_CONTENT.about.coach_title,
    coach_photo: result.ABOUT?.coach_photo || DEFAULT_CONTENT.about.coach_photo,
    certification_photo: result.ABOUT?.certification_photo || DEFAULT_CONTENT.about.certification_photo,
    bio_heading: result.ABOUT?.bio_heading || DEFAULT_CONTENT.about.bio_heading,
    bio_paragraph_1: result.ABOUT?.bio_paragraph_1 || DEFAULT_CONTENT.about.bio_paragraph_1,
    bio_paragraph_2: result.ABOUT?.bio_paragraph_2 || DEFAULT_CONTENT.about.bio_paragraph_2,
  };

  const video: VideoContent = {
    youtube_id: result.VIDEO?.youtube_id || DEFAULT_CONTENT.video.youtube_id,
    video_title: result.VIDEO?.video_title || DEFAULT_CONTENT.video.video_title,
  };

  // Build reviews dynamically
  const reviews: ReviewItem[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const key = `review_${i}`;
    if (result.REVIEWS?.[key]) {
      const rawReview = result.REVIEWS[key];
      // Try to parse out author. Reviews are like "text" - Author
      let text = rawReview;
      let author = "Anonymous";
      
      const lastHyphen = rawReview.lastIndexOf(' - ');
      if (lastHyphen !== -1) {
        text = rawReview.slice(0, lastHyphen).trim();
        author = rawReview.slice(lastHyphen + 3).trim();
        // Remove surrounding quotes if any
        if (text.startsWith('"') && text.endsWith('"')) {
          text = text.slice(1, -1);
        } else if (text.startsWith('“') && text.endsWith('”')) {
          text = text.slice(1, -1);
        }
      }
      
      reviews.push({ text, author });
    }
  }
  
  if (reviews.length === 0) {
    reviews.push(...DEFAULT_CONTENT.reviews);
  }

  // Build program benefits dynamically
  const points: ProgramBenefit[] = [];
  for (let i = 1; i <= 10; i++) {
    const iconKey = `point_${i}_icon`;
    const titleKey = `point_${i}_title`;
    const textKey = `point_${i}_text`;
    
    if (result.PROGRAM?.[titleKey]) {
      points.push({
        icon: result.PROGRAM[iconKey] || 'Award',
        title: result.PROGRAM[titleKey],
        text: result.PROGRAM[textKey] || '',
      });
    }
  }
  
  const program: ProgramContent = {
    section_title: result.PROGRAM?.section_title || DEFAULT_CONTENT.program.section_title,
    section_subtitle: result.PROGRAM?.section_subtitle || DEFAULT_CONTENT.program.section_subtitle,
    supporting_image: result.PROGRAM?.supporting_image || DEFAULT_CONTENT.program.supporting_image,
    points: points.length > 0 ? points : DEFAULT_CONTENT.program.points,
  };

  const footer: FooterContent = {
    instagram_url: result.FOOTER?.instagram_url || DEFAULT_CONTENT.footer.instagram_url,
    youtube_url: result.FOOTER?.youtube_url || DEFAULT_CONTENT.footer.youtube_url,
    contact_email: result.FOOTER?.contact_email || DEFAULT_CONTENT.footer.contact_email,
    contact_phone: result.FOOTER?.contact_phone || DEFAULT_CONTENT.footer.contact_phone,
    copyright: result.FOOTER?.copyright || DEFAULT_CONTENT.footer.copyright,
    secondary_cta_text: result.FOOTER?.secondary_cta_text || DEFAULT_CONTENT.footer.secondary_cta_text,
    youtube_cta_text: result.FOOTER?.youtube_cta_text || DEFAULT_CONTENT.footer.youtube_cta_text,
  };

  // Build video testimonials dynamically
  const hasVideoTestimonialsSection = Object.prototype.hasOwnProperty.call(result, 'VIDEO_TESTIMONIALS');
  const videoTestimonialItems: VideoTestimonialItem[] = [];
  const videoTestimonialsSource = result.VIDEO_TESTIMONIALS || {};
  const clientIndices = Object.keys(videoTestimonialsSource)
    .map((key) => key.match(/^client_(\d+)_name$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => Number.parseInt(match[1], 10))
    .sort((a, b) => a - b);

  for (const i of clientIndices) {
    const nameKey = `client_${i}_name`;
    const skillKey = `client_${i}_skill`;
    const durationKey = `client_${i}_duration`;
    const descKey = `client_${i}_desc`;
    const videosKey = `client_${i}_videos`;
    
    if (videoTestimonialsSource[nameKey]) {
      const videosRaw = videoTestimonialsSource[videosKey] || '';
      const videos = videosRaw
        .split(',')
        .map((v: string) => v.trim())
        .filter((v: string) => v.length > 0);

      videoTestimonialItems.push({
        athlete: videoTestimonialsSource[nameKey],
        skill: videoTestimonialsSource[skillKey] || '',
        duration: videoTestimonialsSource[durationKey] || '',
        desc: videoTestimonialsSource[descKey] || '',
        id: videos[0] || '78zo1AeWSc8',
        videos: videos.length > 0 ? videos : ['78zo1AeWSc8'],
      });
    }
  }

  if (!hasVideoTestimonialsSection && videoTestimonialItems.length === 0) {
    videoTestimonialItems.push(...DEFAULT_CONTENT.videoTestimonials.items);
  }

  const videoTestimonials: VideoTestimonialsContent = {
    section_eyebrow: result.VIDEO_TESTIMONIALS?.section_eyebrow || DEFAULT_CONTENT.videoTestimonials.section_eyebrow,
    section_title: result.VIDEO_TESTIMONIALS?.section_title || DEFAULT_CONTENT.videoTestimonials.section_title,
    section_subtitle: result.VIDEO_TESTIMONIALS?.section_subtitle || DEFAULT_CONTENT.videoTestimonials.section_subtitle,
    items: videoTestimonialItems,
  };

  // Build FAQ items dynamically
  const faqItems: FaqItem[] = [];
  const faqSource = result.FAQ || {};
  const faqIndices = Object.keys(faqSource)
    .map((key) => key.match(/^faq_(\d+)_question$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => Number.parseInt(match[1], 10))
    .sort((a, b) => a - b);

  for (const i of faqIndices) {
    const questionKey = `faq_${i}_question`;
    const answerKey = `faq_${i}_answer`;
    if (faqSource[questionKey]) {
      faqItems.push({
        question: faqSource[questionKey],
        answer: faqSource[answerKey] || '',
      });
    }
  }

  const faq: FaqContent = {
    section_eyebrow: result.FAQ?.section_eyebrow || DEFAULT_CONTENT.faq.section_eyebrow,
    section_title: result.FAQ?.section_title || DEFAULT_CONTENT.faq.section_title,
    section_subtitle: result.FAQ?.section_subtitle || DEFAULT_CONTENT.faq.section_subtitle,
    items: faqItems.length > 0 ? faqItems : DEFAULT_CONTENT.faq.items,
  };

  return {
    hero,
    floating_cta,
    transformations,
    about,
    video,
    reviews,
    program,
    footer,
    videoTestimonials,
    faq,
  };
}