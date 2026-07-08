'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import productsData from '@/data/products.json';
import { Layers, Disc, Hammer, CheckCircle2 } from 'lucide-react';

export default function Products() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'vi' ? 'Tất cả' : language === 'en' ? 'All Products' : '所有产品', icon: Layers },
    { id: 'ingot', label: language === 'vi' ? 'Nhôm Thỏi' : language === 'en' ? 'Aluminum Ingot' : '铝锭', icon: Hammer },
    { id: 'billet', label: language === 'vi' ? 'Nhôm Billet' : language === 'en' ? 'Aluminum Billet' : '铝圆棒', icon: Disc },
    { id: 'profile', label: language === 'vi' ? 'Nhôm Định Hình' : language === 'en' ? 'Aluminum Profiles' : '铝型材', icon: Layers },
  ];

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white overflow-hidden">
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
            {t('products_sec', 'title')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-500 mt-4 max-w-xl mx-auto text-sm sm:text-base font-light"
          >
            {t('products_sec', 'subtitle')}
          </motion.p>
        </div>

        {/* Categories Tab Switched */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-glass border-slate-200 text-slate-600 hover:border-primary/20 hover:text-primary'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, idx) => {
              return (
                <motion.div
                  layout
                  key={prod.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col rounded-2xl bg-glass border border-slate-100 overflow-hidden shadow-md relative group hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={prod.image}
                      alt={prod.name[language] || prod.name['vi']}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-50" />
                    
                    {/* Category Label overlay */}
                    <div className="absolute top-4 left-4 bg-white/95 border border-slate-100 shadow-sm rounded-md px-2.5 py-1 text-[10px] font-heading font-bold text-primary uppercase tracking-wider">
                      {prod.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-200">
                        {prod.name[language] || prod.name['vi']}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6 text-justify">
                        {prod.description[language] || prod.description['vi']}
                      </p>

                      {/* Specs */}
                      <div className="mb-6">
                        <span className="text-xs font-semibold text-slate-400 block mb-2">
                          {t('products_sec', 'specs_label')}
                        </span>
                        <div className="space-y-2">
                          {prod.specs.map((spec, i) => (
                            <div key={i} className="flex items-center text-xs text-slate-600">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Capacity indicators at the bottom */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-400">
                          {t('products_sec', 'capacity_label')}
                        </span>
                        <span className="font-bold text-primary">
                          {prod.capacity[language] || prod.capacity['vi']}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
