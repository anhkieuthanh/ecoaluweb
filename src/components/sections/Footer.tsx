'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#042a20] border-t border-emerald-950 pt-16 pb-8 relative overflow-hidden text-slate-200">
      {/* Scroll to Top button */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-emerald-900 border border-emerald-800/40 hover:border-accent-green/45 hover:text-accent-green text-slate-300 rounded-full transition-all duration-300 shadow-md cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-5 cursor-pointer" onClick={handleScrollToTop}>
              <Image
                src="/logo.png"
                alt="EcoAlu Logo"
                width={100}
                height={35}
                className="h-8 w-auto brightness-0 invert object-contain"
              />
              <span className="ml-3 font-heading font-extrabold text-lg tracking-wider text-gradient-green">
                ECOALU
              </span>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed mb-6 max-w-sm text-justify font-light">
              {language === 'vi' 
                ? 'Công ty Cổ phần Nhôm Công Nghệ Cao ECOALU Thanh Hóa tự hào là hạt nhân thúc đẩy chuỗi sản xuất xanh bền vững, giải phóng sức mạnh công nghiệp bổ trợ Việt Nam vươn tầm quốc tế.'
                : language === 'en'
                ? 'ECOALU High-Tech Aluminum JSC is proud to drive the sustainable green supply chain, unleashing the power of Vietnamese supporting industries globally.'
                : '清化ECOALU high-tech aluminum Co., Ltd.自豪地成为推动可持续绿色生产链的核心，释放越南配套产业走向全球的力量。'}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-emerald-950 border border-emerald-900/30 hover:border-accent-green/20 text-slate-300 hover:text-accent-green rounded transition-colors duration-200 shadow-sm">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-emerald-950 border border-emerald-900/30 hover:border-accent-green/20 text-slate-300 hover:text-accent-green rounded transition-colors duration-200 shadow-sm">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-emerald-950 border border-emerald-900/30 hover:border-accent-green/20 text-slate-300 hover:text-accent-green rounded transition-colors duration-200 shadow-sm">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap Về chúng tôi (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-5">
              {t('nav', 'about')}
            </h4>
            <ul className="space-y-3">
              {['about', 'esg', 'news'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 cursor-pointer"
                  >
                    {t('nav', id)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-5">
              {t('nav', 'products')}
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 text-left cursor-pointer"
                >
                  {language === 'vi' ? 'Nhôm Thỏi (Ingot)' : language === 'en' ? 'Aluminum Ingot' : '铝锭 (Ingot)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 text-left cursor-pointer"
                >
                  {language === 'vi' ? 'Nhôm Billet (Thanh Tròn)' : language === 'en' ? 'Aluminum Billet' : '铝圆棒 (Billet)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 text-left cursor-pointer"
                >
                  {language === 'vi' ? 'Nhôm Thanh Định Hình' : language === 'en' ? 'Aluminum Profiles' : '铝型材 (Profile)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-5">
              {language === 'vi' ? 'Thông tin chung' : language === 'en' ? 'General Info' : '一般信息'}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start">
                <span className="font-bold text-slate-100 mr-2">Hotline:</span>
                <span>+84 (0) 123 456 789</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-slate-100 mr-2">Email:</span>
                <span>info@ecoalu.com.vn</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-slate-100 mr-2">HQ:</span>
                <span className="text-justify leading-relaxed">
                  {language === 'vi' 
                    ? 'Tòa nhà Golden Field, 24 Nguyễn Cơ Thạch, Mỹ Đình, Nam Từ Liêm, Hà Nội' 
                    : language === 'en' 
                    ? 'Golden Field Building, 24 Nguyen Co Thach Street, My Dinh, Nam Tu Liem, Hanoi' 
                    : '河内市南慈廉郡美亭阮基石路24号Golden Field大楼'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-slate-100 mr-2">Factory:</span>
                <span className="text-justify leading-relaxed">
                  {language === 'vi' 
                    ? 'Lô CN-05, Cụm công nghiệp Hợp Thắng, Triệu Sơn, Thanh Hóa' 
                    : language === 'en' 
                    ? 'Lot CN-05, Hop Thang Industrial Cluster, Trieu Son, Thanh Hoa' 
                    : '清化省赵山县合胜工业区CN-05地块'}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="border-t border-emerald-950 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-450 font-semibold uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} ECOALU. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0 flex items-center">
            <span>DESIGN &amp; TECHNOLOGY BY </span>
            <span className="text-gradient-green font-extrabold ml-1.5">ECOALU TEAM</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
