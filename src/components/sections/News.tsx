'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import newsData from '@/data/news.json';
import { Calendar, ChevronRight } from 'lucide-react';

export default function News() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'vi' ? 'Tất cả' : language === 'en' ? 'All' : '全部' },
    { id: 'enterprise', label: t('news_sec', 'cat_enterprise') },
    { id: 'market', label: t('news_sec', 'cat_market') },
    { id: 'internal', label: t('news_sec', 'cat_internal') },
    { id: 'csr', label: t('news_sec', 'cat_csr') },
    { id: 'events', label: t('news_sec', 'cat_events') },
  ];

  // Support both direct array and Decap CMS object wrapper formats
  const articlesList = (Array.isArray(newsData) ? newsData : (newsData as any).articles || []) as any[];

  const filteredNews = activeCategory === 'all'
    ? articlesList
    : articlesList.filter((item: any) => item.category === activeCategory);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'enterprise': return t('news_sec', 'cat_enterprise');
      case 'market': return t('news_sec', 'cat_market');
      case 'internal': return t('news_sec', 'cat_internal');
      case 'csr': return t('news_sec', 'cat_csr');
      case 'events': return t('news_sec', 'cat_events');
      default: return '';
    }
  };

  const formatDate = (dateStr: string) => {
    if (language === 'vi') {
      const parts = dateStr.split('-');
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  return (
    <section id="news" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary tracking-wide uppercase"
          >
            {t('news_sec', 'title')}
          </motion.h2>
          <div className="h-1 bg-primary w-16 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Switched */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded text-xs font-bold transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-glass border-slate-200 text-slate-600 hover:border-primary/20 hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col rounded-2xl bg-glass border border-slate-100 overflow-hidden hover:border-primary/25 group transition-all duration-300 shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={
                      item.category === 'enterprise' ? '/images/hero-factory-1.png' :
                      item.category === 'market' ? '/images/hero-factory-2.png' :
                      item.category === 'internal' ? '/images/hero-factory-3.png' :
                      item.category === 'csr' ? '/images/factory-layout.png' :
                      '/images/product-ingot.png'
                    }
                    alt={item.title[language] || item.title['vi']}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-50" />
                  
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 border border-slate-100 rounded px-2.5 py-0.5 text-[9px] font-bold text-primary uppercase tracking-wider shadow-sm">
                    {getCategoryLabel(item.category)}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date */}
                    <div className="flex items-center text-slate-500 text-[11px] mb-3 font-semibold">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-450" />
                      <span>{formatDate(item.date)}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-heading font-bold text-slate-800 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug mb-3 text-justify">
                      {item.title[language] || item.title['vi']}
                    </h3>

                    <p className="text-xs text-slate-500 font-light leading-relaxed mb-6 line-clamp-3 text-justify">
                      {item.summary[language] || item.summary['vi']}
                    </p>
                  </div>

                  <button className="group/btn flex items-center text-xs font-bold text-primary hover:text-accent-green transition-colors duration-200 mt-auto cursor-pointer">
                    <span>{t('news_sec', 'read_more')}</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
