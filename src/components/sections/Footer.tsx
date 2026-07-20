'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  const sitemapLinks = [
    { href: '/about/', label: t('nav', 'about') },
    { href: '/esg/', label: t('nav', 'esg') },
    { href: '/news/', label: t('nav', 'news') },
    { href: '/solutions/', label: t('nav', 'solutions') },
    { href: '/contact/', label: t('nav', 'contact') },
  ];

  return (
    <footer className="bg-primary-dark border-t border-emerald-950 pt-16 pb-8 relative overflow-hidden text-slate-200">
      {/* Scroll to Top button */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-primary-dark/80 border border-accent-green-dark/40 hover:border-accent-green/45 hover:text-accent-green text-slate-300 rounded-full transition-all duration-300 shadow-md cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Info (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center mb-5 group">
              <Image
                src="/logo.png"
                alt="EcoAlu Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="ml-3 font-heading font-extrabold text-xl tracking-wider text-white group-hover:text-accent-green transition-colors">
                ECOALU
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light text-justify max-w-sm">
              {language === 'vi' 
                ? 'Nhà máy nhôm công nghệ cao EcoAlu tại Thanh Hóa - Giải pháp sản xuất nhôm kỹ thuật cao hướng tới phát triển bền vững và kinh tế tuần hoàn.'
                : language === 'en'
                ? 'EcoAlu high-tech aluminum factory in Thanh Hoa - High-tech aluminum manufacturing solutions toward sustainable development and circular economy.'
                : '清化省EcoAlu高科技铝业工厂 - 致力于可持续发展和循环经济的高科技铝生产解决方案。'}
            </p>
          </div>

          {/* Column 2: Sitemap Về chúng tôi (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-5">
              {t('nav', 'about')}
            </h4>
            <ul className="space-y-3">
              {sitemapLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider mb-5">
              {t('nav', 'products')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/"
                  className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 text-left block"
                >
                  {language === 'vi' ? 'Nhôm Thỏi (Ingot)' : language === 'en' ? 'Aluminum Ingot' : '铝锭 (Ingot)'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/"
                  className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 text-left block"
                >
                  {language === 'vi' ? 'Nhôm Billet (Thanh Tròn)' : language === 'en' ? 'Aluminum Billet' : '铝圆棒 (Billet)'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/"
                  className="text-xs text-slate-300 hover:text-accent-green transition-colors duration-150 text-left block"
                >
                  {language === 'vi' ? 'Nhôm Thanh Định Hình' : language === 'en' ? 'Aluminum Profiles' : '铝型材 (Profile)'}
                </Link>
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

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-emerald-950/80 text-center text-xs text-slate-400 font-medium tracking-wider">
          <p>&copy; {new Date().getFullYear()} ECOALU HIGH-TECH ALUMINUM FACTORY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
