'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Sparkles, ArrowDownToLine } from 'lucide-react';
import certificatesData from '@/data/certificates.json';

export default function ESG() {
  const { t, language } = useLanguage();

  const esgItems = [
    {
      icon: Leaf,
      title: t('esg_sec', 'env_title'),
      desc: t('esg_sec', 'env_desc'),
      color: 'text-accent-green-dark border-primary-light bg-primary-light/40 hover:bg-primary-light/80',
    },
    {
      icon: Users,
      title: t('esg_sec', 'soc_title'),
      desc: t('esg_sec', 'soc_desc'),
      color: 'text-sky-700 border-sky-100 bg-sky-50/40 hover:bg-sky-50/80',
    },
    {
      icon: Award,
      title: t('esg_sec', 'gov_title'),
      desc: t('esg_sec', 'gov_desc'),
      color: 'text-amber-700 border-amber-100 bg-amber-50/40 hover:bg-amber-50/80',
    },
  ];

  return (
    <section id="esg" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <button className="flex items-center space-x-2 px-4 py-2 rounded bg-white border border-slate-200 hover:border-primary/40 hover:text-primary text-xs font-bold text-slate-700 transition-all duration-300 shadow-sm cursor-pointer">
              <Sparkles className="h-4 w-4" />
              <span>Carbon Credit</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded bg-white border border-slate-200 hover:border-primary/40 hover:text-primary text-xs font-bold text-slate-700 transition-all duration-300 shadow-sm cursor-pointer">
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
                className={`p-8 rounded-2xl border backdrop-blur-sm flex flex-col group hover:border-primary/30 transition-all duration-300 shadow-sm ${item.color}`}
              >
                <div className="p-4 rounded-xl bg-white border border-slate-100 w-fit mb-6 text-current group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="h-7 w-7" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certificates Sub-section */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary uppercase tracking-wide">
              {language === 'vi' ? 'Chứng nhận & Tiêu chuẩn Kỹ thuật' : language === 'en' ? 'Certifications & Technical Standards' : '认证与技术标准'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-light">
              {language === 'vi' 
                ? 'Sản phẩm EcoAlu được kiểm định nghiêm ngặt theo các tiêu chuẩn quốc tế khắt khe nhất' 
                : language === 'en' 
                ? 'EcoAlu products are strictly tested against the most demanding global standards' 
                : 'EcoAlu产品按照最严格的国际标准进行严格检测'}
            </p>
          </div>

          {/* Certificate grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-xl bg-glass border border-slate-100 flex flex-col items-center justify-center text-center group hover:border-primary/45 hover:bg-primary-light/10 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-heading font-extrabold text-slate-800 group-hover:text-primary transition-colors duration-200">
                  {cert.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-bold group-hover:text-slate-700 transition-colors duration-200 mt-1 leading-tight">
                  {cert.description[language] || cert.description['vi']}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
