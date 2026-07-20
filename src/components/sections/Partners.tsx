'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import partnersData from '@/data/partners.json';
import { Building, ShieldCheck } from 'lucide-react';

// Vector brand logos for maximum sharpness and zero-request loading
const PARTNER_LOGOS: Record<string, React.ComponentType> = {
  'AUSTDOOR': () => (
    <svg className="h-6 w-auto max-w-full" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="21" fill="#0b52a0" fontFamily="'Montserrat', 'Inter', sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">AUSTD</text>
      {/* First O (roller door style in red) */}
      <circle cx="82" cy="15" r="7" stroke="#e01a22" strokeWidth="2.5" fill="none" />
      <line x1="77" y1="12" x2="87" y2="12" stroke="#e01a22" strokeWidth="1.2" />
      <line x1="75" y1="15" x2="89" y2="15" stroke="#e01a22" strokeWidth="1.2" />
      <line x1="77" y1="18" x2="87" y2="18" stroke="#e01a22" strokeWidth="1.2" />
      {/* Second O (roller door style in blue) */}
      <circle cx="100" cy="15" r="7" stroke="#0b52a0" strokeWidth="2.5" fill="none" />
      <line x1="95" y1="12" x2="105" y2="12" stroke="#0b52a0" strokeWidth="1.2" />
      <line x1="93" y1="15" x2="107" y2="15" stroke="#0b52a0" strokeWidth="1.2" />
      <line x1="95" y1="18" x2="105" y2="18" stroke="#0b52a0" strokeWidth="1.2" />
      <text x="111" y="21" fill="#0b52a0" fontFamily="'Montserrat', 'Inter', sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">R</text>
    </svg>
  ),
  'Việt Pháp SHAL': () => (
    <svg className="h-6 w-auto max-w-full" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="20" height="20" rx="3" fill="#0b52a0" />
      <path d="M 10,9 L 15,20 L 20,9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="32" y="14" fill="#0b52a0" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">VIET PHAP</text>
      <text x="32" y="23" fill="#e01a22" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="8" letterSpacing="1.5">SHAL ALUM</text>
    </svg>
  ),
  'EUROHA': () => (
    <svg className="h-6 w-auto max-w-full" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 5,5 H 22 V 22 H 5 Z" fill="#e01a22" />
      <path d="M 10,10 H 27 V 27 H 10 Z" fill="#0b52a0" opacity="0.8" />
      <text x="35" y="20" fill="#0b52a0" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="14" letterSpacing="1.5">EUROHA</text>
    </svg>
  ),
  'NGỌC DIỆP': () => (
    <svg className="h-6 w-auto max-w-full" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 5,20 L 12,6 L 19,20 L 12,16 Z" fill="#b8860b" />
      <circle cx="12" cy="5" r="1.5" fill="#b8860b" />
      <text x="27" y="19" fill="#1e293b" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="11" letterSpacing="1">NGOC DIEP</text>
    </svg>
  ),
  'CNC TECH THĂNG LONG': () => (
    <svg className="h-6 w-auto max-w-full" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="18" height="18" rx="4" className="fill-primary" />
      <path d="M 9,15 H 19 M 14,10 V 20" stroke="#ffffff" strokeWidth="2" />
      <text x="29" y="19" className="fill-primary" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="11" letterSpacing="1">CNCTECH</text>
    </svg>
  ),
  'VietinBank': () => (
    <svg className="h-6.5 w-auto max-w-full" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="10" stroke="#0054a5" strokeWidth="3" fill="none" />
      <path d="M 15,5 A 10 10 0 0 1 25 15 L 15,15 Z" fill="#ed1c24" />
      <rect x="12" y="12" width="6" height="6" fill="#ffffff" />
      <text x="32" y="20" fill="#0054a5" fontFamily="'Inter', sans-serif" fontWeight="bold" fontSize="14" letterSpacing="-0.5">VietinBank</text>
    </svg>
  ),
  'BIDV': () => (
    <svg className="h-6.5 w-auto max-w-full" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 15,5 L 18,12 L 25,15 L 18,18 L 15,25 L 12,18 L 5,15 L 12,12 Z" fill="#007d43" />
      <path d="M 15,10 L 16.5,13.5 L 20,15 L 16.5,16.5 L 15,20 L 13.5,16.5 L 10,15 L 13.5,13.5 Z" fill="#ed1c24" />
      <text x="32" y="21" fill="#007d43" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="16">BIDV</text>
    </svg>
  ),
  'Agribank': () => (
    <svg className="h-6.5 w-auto max-w-full" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="20" height="20" fill="#ba1a1a" stroke="#ba1a1a" strokeWidth="1" />
      <path d="M 8,22 C 12,18 18,12 22,8" stroke="#ffeb3b" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="15" r="2" fill="#4caf50" />
      <circle cx="16" cy="12" r="2" fill="#4caf50" />
      <text x="32" y="20" fill="#ba1a1a" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="14" letterSpacing="-0.2">Agribank</text>
    </svg>
  ),
  'Vietcombank': () => (
    <svg className="h-6.5 w-auto max-w-full" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 12,5 Q 6,10 12,18 Q 18,22 22,25 Q 24,18 20,12 Q 16,6 12,5 Z" fill="#00a753" />
      <path d="M 12,5 Q 15,12 22,25 Q 12,20 12,18 Z" fill="#71c043" />
      <text x="28" y="20" fill="#0f763e" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="12" letterSpacing="-0.2">Vietcombank</text>
    </svg>
  ),
};

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
                  {(() => {
                    const LogoComponent = PARTNER_LOGOS[p.name];
                    if (LogoComponent) {
                      return <LogoComponent />;
                    }
                    return (
                      <span className="text-xs sm:text-sm font-heading font-extrabold text-slate-500 group-hover:text-accent-green transition-colors duration-200 uppercase tracking-wider text-center line-clamp-2">
                        {p.name}
                      </span>
                    );
                  })()}
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
                  {(() => {
                    const LogoComponent = PARTNER_LOGOS[p.name];
                    if (LogoComponent) {
                      return <LogoComponent />;
                    }
                    return (
                      <span className="text-xs sm:text-sm font-heading font-extrabold text-slate-500 group-hover:text-primary transition-colors duration-200 uppercase tracking-wider text-center">
                        {p.name}
                      </span>
                    );
                  })()}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
