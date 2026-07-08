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
    <section className="relative py-20 bg-[#f8fafc] border-y border-slate-200/60 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="flex flex-col p-6 rounded-xl bg-white border border-slate-150 shadow-sm relative group hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                {/* Accent icon top-right - Soft light green */}
                <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 stroke-[1.5]" />
                </div>

                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block font-heading">
                  {stat.label}
                </span>

                <div className="flex items-baseline mb-3">
                  <span className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-800 tracking-tight">
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

                <p className="text-xs text-slate-500 font-light leading-relaxed mt-2">
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
