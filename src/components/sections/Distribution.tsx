'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Anchor, Plane, MapPin, Navigation, ArrowRight } from 'lucide-react';

export default function Distribution() {
  const { t, language } = useLanguage();

  const locations = [
    {
      icon: Anchor,
      distance: '60km',
      name: t('logistics', 'port'),
      desc: language === 'vi' ? 'Hạ tầng cảng nước sâu Nghi Sơn thuận tiện xuất khẩu quốc tế' : language === 'en' ? 'Nghi Son deep-water port, convenient for international export' : '宜山深水港，方便国际出口',
    },
    {
      icon: Plane,
      distance: '18km',
      name: t('logistics', 'airport'),
      desc: language === 'vi' ? 'Kết nối nhanh chóng với mạng lưới đường hàng không nội địa' : language === 'en' ? 'Quick connection to the domestic air network' : '快速连接国内航空网络',
    },
    {
      icon: MapPin,
      distance: '23km',
      name: t('logistics', 'city'),
      desc: language === 'vi' ? 'Trung tâm logistics hành chính tỉnh Thanh Hóa' : language === 'en' ? 'Administrative logistics hub of Thanh Hoa' : '清化省行政物流中心',
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
    <section className="py-20 bg-primary-light overflow-hidden">
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
            {t('logistics', 'title')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols): Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <Navigation className="h-5 w-5 animate-pulse" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-widest uppercase">
                {language === 'vi' ? 'Vị trí chiến lược' : language === 'en' ? 'Strategic Location' : '战略位置'}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-800 mb-6 leading-tight">
              {language === 'vi' ? 'Cửa ngõ kết nối giao thương trong nước & quốc tế' : language === 'en' ? 'The Gateway for Domestic & Global Commerce' : '国内和国际贸易的门户'}
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed text-left">
              {t('logistics', 'desc')}
            </p>

            {/* List of three key logistics locations */}
            <div className="space-y-6">
              {locations.map((loc, idx) => {
                const IconComp = loc.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3 bg-glass rounded-lg border border-slate-100 text-primary shadow-sm">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-heading font-extrabold text-primary">
                          {loc.distance}
                        </span>
                        <span className="text-sm font-heading font-bold text-slate-700">
                          {loc.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {loc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column (7 cols): Map/Flow illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-6 rounded-2xl bg-glass border border-slate-100 shadow-xl relative overflow-hidden">
              {/* Card Title inside map */}
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-heading font-bold text-primary">
                    {t('logistics', 'route_title')}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {language === 'vi' ? 'Chuỗi cung ứng nguyên liệu tuần hoàn tối ưu' : language === 'en' ? 'Optimal circular material supply chain' : '优化的循环材料供应链'}
                  </p>
                </div>
                <span className="text-xs font-bold bg-accent-green/10 text-primary border border-accent-green/20 px-2 py-0.5 rounded">
                  {language === 'vi' ? 'Tiết kiệm chi phí' : language === 'en' ? 'Cost Saving' : '节省成本'}
                </span>
              </div>

                     {/* Map/Diagram mockup - Styled SVG */}
              <div className="h-64 sm:h-80 w-full relative bg-slate-50 rounded-xl overflow-hidden border border-slate-150 flex items-center justify-center p-4">
                <svg className="w-full h-full text-slate-350" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <path d="M 0,40 L 600,40 M 0,90 L 600,90 M 0,140 L 600,140 M 0,190 L 600,190 M 0,240 L 600,240 M 0,290 L 600,290" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                  <path d="M 100,0 L 100,320 M 200,0 L 200,320 M 300,0 L 300,320 M 400,0 L 400,320 M 500,0 L 500,320" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />

                  {/* Connecting lines */}
                  {/* Laos -> Cau Treo (Slate Grey - border gate supply) */}
                  <path d="M 80,180 Q 145,160 210,180" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" />
                  
                  {/* Cau Treo -> Factory (Vibrant Emerald - raw materials import) */}
                  <path d="M 210,180 L 285,155" className="stroke-accent-green" strokeWidth="3" />
                  
                  {/* Tho Xuan Airport -> Factory (Slate Grey - air connection) */}
                  <path d="M 350,60 L 350,130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,3" />
                  
                  {/* Factory -> Nghi Son Port (Primary Green - heavy logistics route) */}
                  <path d="M 415,155 L 470,240" className="stroke-primary" strokeWidth="3" />
                  
                  {/* Nghi Son Port -> Export (Dark Emerald - global export lane) */}
                  <path d="M 470,240 Q 515,220 560,180" className="stroke-accent-green-dark" strokeWidth="2.5" strokeDasharray="6,4" />

                  {/* Nodes & Labels */}
                  
                  {/* Laos */}
                  <circle cx="80" cy="180" r="6" fill="#64748b" />
                  <circle cx="80" cy="180" r="12" stroke="#64748b" strokeWidth="1" strokeOpacity="0.5" className="animate-ping" />
                  <text x="80" y="208" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">
                    {language === 'vi' ? 'LAOS (LÀO)' : language === 'en' ? 'LAOS' : '老挝'}
                  </text>

                  {/* Cau Treo */}
                  <circle cx="210" cy="180" r="6" className="fill-primary" />
                  <text x="210" y="208" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">
                    {language === 'vi' ? 'CỬA KHẨU CẦU TREO' : language === 'en' ? 'CAU TREO BORDER GATE' : '吊桥口岸'}
                  </text>

                  {/* EcoAlu Factory (Thanh Hoa) */}
                  <g>
                    <rect x="285" y="130" width="130" height="50" rx="8" className="fill-primary-light stroke-primary" strokeWidth="2" />
                    <text x="350" y="149" textAnchor="middle" className="fill-accent-green-dark" fontSize="10" fontWeight="bold">
                      {language === 'vi' ? 'NHÀ MÁY ECOALU' : 'ECOALU FACTORY'}
                    </text>
                    <text x="350" y="165" textAnchor="middle" className="fill-primary" fontSize="8" fontWeight="bold">
                      {language === 'vi' ? 'TRIỆU SƠN, THANH HÓA' : 'TRIEU SON, THANH HOA'}
                    </text>
                  </g>

                  {/* Tho Xuan Airport */}
                  <circle cx="350" cy="60" r="5" fill="#64748b" />
                  <text x="350" y="46" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="semibold">
                    {language === 'vi' ? 'SÂN BAY THỌ XUÂN (18km)' : language === 'en' ? 'THO XUAN AIRPORT (18km)' : '寿春机场 (18km)'}
                  </text>

                  {/* Nghi Son Port */}
                  <circle cx="470" cy="240" r="5" className="fill-primary" />
                  <text x="470" y="265" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="semibold">
                    {language === 'vi' ? 'CẢNG NGHI SƠN (60km)' : language === 'en' ? 'NGHI SON PORT (60km)' : '宜山港 (60km)'}
                  </text>

                  {/* International Export */}
                  <circle cx="560" cy="180" r="6" className="fill-accent-green-dark" />
                  <circle cx="560" cy="180" r="12" strokeWidth="1" strokeOpacity="0.5" className="animate-ping stroke-accent-green-dark" />
                  <text x="560" y="208" textAnchor="middle" className="fill-accent-green-dark" fontSize="9" fontWeight="bold">
                    {language === 'vi' ? 'EXPORT (MỸ, EU, NHẬT...)' : language === 'en' ? 'EXPORT (US, EU, JP...)' : '出口 (美、欧、日...)'}
                  </text>
                </svg>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white border border-slate-200 rounded px-2.5 py-1 text-[10px] font-semibold text-slate-500 shadow-sm">
                  {language === 'vi' ? 'SƠ ĐỒ LOGISTICS THÔNG MINH' : language === 'en' ? 'SMART LOGISTICS SCHEME' : '智能物流图'}
                </div>
              </div>

              {/* Call-to-action button */}
              <div className="mt-8 text-center sm:text-left">
                <button
                  onClick={handleCtaClick}
                  className="group inline-flex items-center justify-center bg-primary hover:bg-accent-green-dark text-white px-6 py-3 rounded-md font-heading font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer shadow shadow-primary/10"
                >
                  {t('hero', 'cta')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
