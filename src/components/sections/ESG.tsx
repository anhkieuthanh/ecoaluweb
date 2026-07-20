'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Sparkles, ArrowDownToLine } from 'lucide-react';
import certificatesData from '@/data/certificates.json';

const CERT_COLORS: Record<string, { badge: string; text: string; titleHover: string }> = {
  ISO:  { badge: 'bg-emerald-500/15 group-hover:bg-emerald-500', text: 'text-emerald-400', titleHover: 'group-hover:text-emerald-400' },
  RoHS: { badge: 'bg-amber-500/15 group-hover:bg-amber-500',     text: 'text-amber-400',   titleHover: 'group-hover:text-amber-400' },
  EN:   { badge: 'bg-sky-500/15 group-hover:bg-sky-500',         text: 'text-sky-400',     titleHover: 'group-hover:text-sky-400' },
  JIS:  { badge: 'bg-violet-500/15 group-hover:bg-violet-500',   text: 'text-violet-400',  titleHover: 'group-hover:text-violet-400' },
  ASTM: { badge: 'bg-orange-500/15 group-hover:bg-orange-500',   text: 'text-orange-400',  titleHover: 'group-hover:text-orange-400' },
};

export default function ESG() {
  const { t, language } = useLanguage();

  const esgItems = [
    {
      icon: Leaf,
      title: t('esg_sec', 'env_title'),
      desc: t('esg_sec', 'env_desc'),
      iconClass: 'text-primary bg-primary/20 group-hover:bg-primary group-hover:text-white',
      titleHoverClass: 'group-hover:text-primary',
    },
    {
      icon: Users,
      title: t('esg_sec', 'soc_title'),
      desc: t('esg_sec', 'soc_desc'),
      iconClass: 'text-sky-400 bg-sky-500/20 group-hover:bg-sky-500 group-hover:text-white',
      titleHoverClass: 'group-hover:text-sky-400',
    },
    {
      icon: Award,
      title: t('esg_sec', 'gov_title'),
      desc: t('esg_sec', 'gov_desc'),
      iconClass: 'text-amber-400 bg-amber-500/20 group-hover:bg-amber-500 group-hover:text-white',
      titleHoverClass: 'group-hover:text-amber-400',
    },
  ];

  return (
    <section id="esg" className="py-20 bg-[#041221] overflow-hidden relative">
      {/* Subtle emerald radial accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,rgba(5,150,105,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ESG Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <Leaf className="h-5 w-5" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-widest uppercase">
                ESG Strategy
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-heading font-bold text-primary tracking-wide uppercase"
            >
              {t('esg_sec', 'title')}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-primary mt-4 rounded-full"
            />
          </div>
          
          {/* ESG Extra actions */}
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <button className="flex items-center space-x-2 px-4 py-2 rounded bg-white/[0.06] border border-white/[0.12] text-white/70 hover:border-primary/50 hover:text-white text-xs font-bold transition-all duration-300 cursor-pointer">
              <Sparkles className="h-4 w-4" />
              <span>Carbon Credit</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded bg-white/[0.06] border border-white/[0.12] text-white/70 hover:border-primary/50 hover:text-white text-xs font-bold transition-all duration-300 cursor-pointer">
              <ArrowDownToLine className="h-4 w-4" />
              <span>{language === 'vi' ? 'Báo cáo PTBV' : language === 'en' ? 'ESG Report' : '可持续发展报告'}</span>
            </button>
          </div>
        </div>

        {/* ESG Cards (3 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {esgItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-2xl border flex flex-col group hover:border-white/[0.18] hover:bg-white/[0.07] transition-all duration-300 bg-white/[0.04] border-white/[0.09]"
              >
                <div className={`p-4 rounded-xl w-fit mb-6 transition-colors duration-300 ${item.iconClass}`}>
                  <IconComponent className="h-7 w-7" />
                </div>

                <h3 className={`text-lg sm:text-xl font-heading font-bold text-white mb-4 transition-colors duration-200 ${item.titleHoverClass}`}>
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certificates Sub-section */}
        <div className="border-t border-white/[0.1] pt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary uppercase tracking-wide">
              {language === 'vi' ? 'Chứng nhận & Tiêu chuẩn Kỹ thuật' : language === 'en' ? 'Certifications & Technical Standards' : '认证与技术标准'}
            </h3>
            <p className="text-xs sm:text-sm text-white/50 mt-2 font-light">
              {language === 'vi'
                ? 'Sản phẩm EcoAlu được kiểm định nghiêm ngặt theo các tiêu chuẩn quốc tế khắt khe nhất'
                : language === 'en'
                ? 'EcoAlu products are strictly tested against the most demanding global standards'
                : 'EcoAlu产品按照最严格的国际标准进行严格检测'}
            </p>
          </div>

          {/* Certificate grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {certificatesData.map((cert, index) => {
              const [prefix, ...codeParts] = cert.name.split(' ');
              const code = codeParts.join(' ');
              const color = CERT_COLORS[prefix] ?? { badge: 'bg-white/10 group-hover:bg-white/20', text: 'text-white/60', titleHover: 'group-hover:text-white' };
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.09] flex flex-col items-center justify-center text-center group hover:border-white/[0.18] hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center mb-3 transition-colors duration-300 ${color.badge}`}>
                  <span className={`text-[11px] font-heading font-extrabold leading-none transition-colors duration-300 ${color.text} group-hover:text-white`}>
                    {prefix}
                  </span>
                  {code && (
                    <span className={`text-[8px] font-mono font-bold leading-none mt-0.5 opacity-80 transition-colors duration-300 ${color.text} group-hover:text-white`}>
                      {code}
                    </span>
                  )}
                </div>
                <h4 className={`text-sm font-heading font-extrabold text-white transition-colors duration-200 ${color.titleHover}`}>
                  {cert.name}
                </h4>
                <p className="text-[10px] text-white/45 font-bold group-hover:text-white/65 transition-colors duration-200 mt-1 leading-tight">
                  {cert.description[language] || cert.description['vi']}
                </p>
              </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
