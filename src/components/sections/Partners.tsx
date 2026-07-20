'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import partnersData from '@/data/partners.json';
import { Building, ShieldCheck } from 'lucide-react';

export default function Partners() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-primary-light border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Metal Industry Partners */}
          <div>
            <div className="flex items-center space-x-2.5 mb-6">
              <ShieldCheck className="h-5 w-5 text-accent-green" />
              <h3 className="text-sm sm:text-base font-heading font-extrabold uppercase text-slate-700 tracking-wider">
                {language === 'vi' ? 'Đối tác bao tiêu & Khách hàng đầu ngành' : language === 'en' ? 'Offtake Partners & Industry Leaders' : '包销合作伙伴与行业领导者'}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partnersData.metal.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="h-16 flex items-center justify-center p-4 rounded-xl bg-white border border-slate-150 text-center group hover:border-accent-green/20 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto max-w-full object-contain "
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bank Partners */}
          <div>
            <div className="flex items-center space-x-2.5 mb-6">
              <Building className="h-5 w-5 text-primary" />
              <h3 className="text-sm sm:text-base font-heading font-extrabold uppercase text-slate-700 tracking-wider">
                {language === 'vi' ? 'Tài trợ tài chính & Ngân hàng liên kết' : language === 'en' ? 'Financial Institutions & Linked Banks' : '金融机构与合作银行'}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {partnersData.banks.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="h-16 flex items-center justify-center p-4 rounded-xl bg-white border border-slate-150 text-center group hover:border-primary/20 hover:bg-slate-50 transition-all duration-300 shadow-sm"
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto max-w-full object-contain "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
