'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Globe, Shield, FileText, Download } from 'lucide-react';

export default function Solutions() {
  const { t, language } = useLanguage();

  const brochures = [
    {
      title: language === 'vi' ? 'EcoAlu Corporate Brochure - Tiếng Việt' : language === 'en' ? 'EcoAlu Corporate Brochure - Vietnamese' : 'EcoAlu 企业画册 - 越南语',
      size: '4.2 MB',
      file: '#',
    },
    {
      title: language === 'vi' ? 'EcoAlu Corporate Brochure - English' : language === 'en' ? 'EcoAlu Corporate Brochure - English' : 'EcoAlu 企业画册 - 英语',
      size: '4.5 MB',
      file: '#',
    },
    {
      title: language === 'vi' ? 'EcoAlu Corporate Brochure - 中文' : language === 'en' ? 'EcoAlu Corporate Brochure - Chinese' : 'EcoAlu 企业画册 - 中文',
      size: '4.8 MB',
      file: '#',
    },
    {
      title: language === 'vi' ? 'Thông số kỹ thuật Nhôm Ingot & Billet' : language === 'en' ? 'Technical Specifications for Ingot & Billet' : '铝锭与铝圆棒技术规格书',
      size: '2.1 MB',
      file: '#',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary tracking-wide uppercase"
          >
            {t('solutions_sec', 'title')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 2-Card Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Card 1: Domestic Solutions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-glass border border-slate-100 hover:border-primary/20 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="p-3.5 bg-primary-light text-primary rounded-lg w-fit mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors duration-200">
                {t('solutions_sec', 'domestic_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left mb-6">
                {t('solutions_sec', 'domestic_desc')}
              </p>
            </div>
            <span className="text-xs font-bold text-primary flex items-center group-hover:underline cursor-pointer">
              {language === 'vi' ? 'Tìm hiểu chuỗi liên kết đối tác' : language === 'en' ? 'Learn about our partner network' : '了解我们的合作伙伴网络'} &rarr;
            </span>
          </motion.div>

          {/* Card 2: International Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-glass border border-slate-100 hover:border-primary/20 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="p-3.5 bg-primary-light text-primary rounded-lg w-fit mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors duration-200">
                {t('solutions_sec', 'intl_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left mb-6">
                {t('solutions_sec', 'intl_desc')}
              </p>
            </div>
            <span className="text-xs font-bold text-primary flex items-center group-hover:underline cursor-pointer">
              {language === 'vi' ? 'Tiêu chuẩn xuất khẩu toàn cầu' : language === 'en' ? 'Global export standards' : '全球出口标准'} &rarr;
            </span>
          </motion.div>
        </div>

        {/* Brochure Download Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-glass border border-slate-150 shadow-md relative overflow-hidden">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800 mb-6 flex items-center">
            <FileText className="h-5.5 w-5.5 text-primary mr-3" />
            {t('solutions_sec', 'download_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brochures.map((bro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:bg-white hover:border-primary/25 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 bg-red-500/5 text-red-600 rounded">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                      {bro.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-bold block mt-0.5">
                      PDF &bull; {bro.size}
                    </span>
                  </div>
                </div>
                
                <a
                  href={bro.file}
                  className="p-2 bg-slate-100 text-slate-600 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow cursor-pointer"
                  title="Download File"
                >
                  <Download className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
