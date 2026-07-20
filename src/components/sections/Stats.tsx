'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { DollarSign, Cpu, Hammer, Shield } from 'lucide-react';

export default function Stats() {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: DollarSign,
      number: 980,
      suffix: ' Tỷ',
      suffixEn: 'B',
      suffixCn: ' 亿',
      label: t('stats', 'investment'),
      desc: t('stats', 'investment_desc'),
    },
    {
      icon: Hammer,
      number: 100000,
      suffix: ' Tấn',
      suffixEn: ' Tons',
      suffixCn: ' 吨',
      label: t('stats', 'capacity'),
      desc: t('stats', 'capacity_desc'),
      separator: ',',
    },
    {
      icon: Shield,
      number: 103621,
      suffix: ' m²',
      suffixEn: ' m²',
      suffixCn: ' ㎡',
      label: t('stats', 'area'),
      desc: t('stats', 'area_desc'),
      separator: ',',
    },
    {
      icon: Cpu,
      number: 98,
      suffix: '%',
      suffixEn: '%',
      suffixCn: '%',
      label: t('stats', 'efficiency'),
      desc: t('stats', 'efficiency_desc'),
    },
  ];

  return (
    <section className="relative py-20 bg-[#041221] overflow-hidden">
      {/* Subtle emerald radial accent — depth without decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(5,150,105,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentSuffix = language === 'vi' ? stat.suffix : language === 'en' ? stat.suffixEn : stat.suffixCn;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col p-6 rounded-xl bg-white/[0.05] border border-white/[0.09] relative group hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-300"
              >
                {/* Accent icon top-right */}
                <div className="absolute top-6 right-6 text-primary/25 group-hover:text-primary/45 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 stroke-[1.5]" />
                </div>

                <span className="text-[10px] font-bold text-white/45 uppercase tracking-widest mb-3 block font-heading">
                  {stat.label}
                </span>

                <div className="flex items-baseline mb-3">
                  <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator={stat.separator || ''}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                  <span className="text-lg sm:text-xl font-heading font-bold text-primary ml-1">
                    {currentSuffix}
                  </span>
                </div>

                <p className="text-xs text-white/55 font-light leading-relaxed mt-2">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
