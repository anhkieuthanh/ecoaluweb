'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  const { t } = useLanguage();

  const slides = [
    {
      image: '/images/hero-factory-1.png',
      title: t('hero', 'slide1_title'),
      sub: t('hero', 'slide1_sub'),
    },
    {
      image: '/images/hero-factory-2.png',
      title: t('hero', 'slide2_title'),
      sub: t('hero', 'slide2_sub'),
    },
    {
      image: '/images/hero-factory-3.png',
      title: t('hero', 'slide3_title'),
      sub: t('hero', 'slide3_sub'),
    },
  ];

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-screen bg-slate-950 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-swiper-bullet"></span>`;
          },
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-[6000ms] ease-out scale-105 swiper-zoom-container">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
            {/* Overlay Gradient: Deep forest black instead of navy blue */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#011a13] via-[#011a13]/75 to-transparent sm:bg-gradient-to-t sm:from-[#011a13] sm:via-[#011a13]/60 sm:to-black/30" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">


                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm sm:text-lg text-slate-300 mb-10 leading-relaxed font-light"
                  >
                    {slide.sub}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <button
                      onClick={handleCtaClick}
                      className="group flex items-center justify-center bg-primary hover:bg-emerald-800 text-white px-6 sm:px-8 py-3.5 rounded-md font-heading font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer"
                    >
                      {t('hero', 'cta')}
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Styled Swiper pagination bullet overrides */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: 30px !important;
        }
        .custom-swiper-bullet {
          width: 32px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background-color: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
          display: inline-block !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #10B981 !important;
          width: 48px !important;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.5) !important;
        }
        .swiper-slide-active .swiper-zoom-container {
          transform: scale(1) !important;
        }
      `}</style>
    </section>
  );
}
