'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/about/', label: t('nav', 'about'), id: 'about', hasSubmenu: true },
    { href: '/products/', label: t('nav', 'products'), id: 'products', hasSubmenu: true },
    { href: '/solutions/', label: t('nav', 'solutions'), id: 'solutions', hasSubmenu: false },
    { href: '/esg/', label: t('nav', 'esg'), id: 'esg', hasSubmenu: false },
    { href: '/news/', label: t('nav', 'news'), id: 'news', hasSubmenu: false },
    { href: '/contact/', label: t('nav', 'contact'), id: 'contact', hasSubmenu: false },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/' || pathname === '';
    const cleanHref = href.replace(/\/$/, '');
    const cleanPath = pathname.replace(/\/$/, '');
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + '/');
  };

  const getSubmenuItems = (id: string) => {
    if (id === 'about') {
      return [
        { label: t('about', 'vision_mission'), target: '/about/' },
        { label: t('about', 'board'), target: '/about/' },
        { label: t('about', 'philosophy'), target: '/about/' },
      ];
    }
    if (id === 'products') {
      return [
        { label: language === 'vi' ? 'Nhôm Thỏi (Ingot)' : language === 'en' ? 'Aluminum Ingot' : '铝锭', target: '/products/' },
        { label: language === 'vi' ? 'Nhôm Billet' : language === 'en' ? 'Aluminum Billet' : '铝圆棒', target: '/products/' },
        { label: language === 'vi' ? 'Nhôm Định Hình' : language === 'en' ? 'Aluminum Profiles' : '铝型材', target: '/products/' },
      ];
    }
    return [];
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 border-b border-slate-100 shadow-sm py-3'
            : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Link */}
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Image
                src="/logo.png"
                alt="EcoAlu Logo"
                width={120}
                height={40}
                className={`h-10 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
                priority
              />
              <span className={`ml-3 font-heading font-extrabold text-lg sm:text-xl tracking-wider transition-all duration-300 ${
                isScrolled ? 'text-primary' : 'text-white group-hover:text-accent-green'
              }`}>
                ECOALU
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => item.hasSubmenu && setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center text-xs sm:text-sm font-heading font-bold transition-all duration-200 px-3 py-2 rounded-md ${
                        active
                          ? isScrolled ? 'text-primary bg-primary-light' : 'text-accent-green bg-white/10'
                          : isScrolled ? 'text-slate-700 hover:text-primary hover:bg-slate-50' : 'text-slate-100 hover:text-accent-green hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      {item.hasSubmenu && (
                        <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasSubmenu && activeDropdown === item.id && (
                      <div className="absolute left-0 mt-0 w-56 rounded-md shadow-xl bg-white ring-1 ring-black/5 overflow-hidden transform opacity-100 scale-100 transition-all duration-200">
                        <div className="py-1">
                          {getSubmenuItems(item.id).map((subItem, index) => (
                            <Link
                              key={index}
                              href={subItem.target}
                              onClick={() => setActiveDropdown(null)}
                              className="block w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-primary-light hover:text-primary transition-all duration-200 border-b border-slate-100 last:border-b-0"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Language Switcher */}
            <div className={`hidden lg:flex items-center space-x-1.5 border-l pl-4 ${
              isScrolled ? 'border-slate-200 text-slate-700' : 'border-white/20 text-slate-200'
            }`}>
              <Globe className="h-4 w-4 mr-1 opacity-70" />
              <button
                onClick={() => setLanguage('vi')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  language === 'vi'
                    ? 'bg-primary text-white shadow-sm'
                    : isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-300 hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  language === 'en'
                    ? 'bg-primary text-white shadow-sm'
                    : isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('cn')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  language === 'cn'
                    ? 'bg-primary text-white shadow-sm'
                    : isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-300 hover:text-white'
                }`}
              >
                CN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-md border ${
                isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-white/10 border-white/20'
              }`}>
                <Globe className={`h-3 w-3 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`} />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className={`bg-transparent text-xs font-bold focus:outline-none border-none cursor-pointer ${
                    isScrolled ? 'text-slate-800' : 'text-white'
                  }`}
                >
                  <option value="vi" className="bg-slate-900 text-slate-200">VI</option>
                  <option value="en" className="bg-slate-900 text-slate-200">EN</option>
                  <option value="cn" className="bg-slate-900 text-slate-200">CN</option>
                </select>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors duration-200 focus:outline-none p-1.5 rounded border ${
                  isScrolled 
                    ? 'text-slate-800 border-slate-200 hover:bg-slate-100' 
                    : 'text-white border-white/20 hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transform transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full py-6 px-5 justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="EcoAlu Logo"
                    width={90}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="ml-2 font-heading font-extrabold text-md tracking-wider text-primary">
                    ECOALU
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded bg-slate-100 text-slate-500 hover:text-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 flex flex-col space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <div key={item.id} className="flex flex-col border-b border-slate-100 pb-2">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-left text-sm font-heading font-bold transition-colors duration-200 py-1.5 px-2 rounded ${
                          active ? 'text-primary bg-primary-light' : 'text-slate-800 hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Languages bottom */}
            <div className="border-t border-slate-100 pt-6">
              <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                {language === 'vi' ? 'Chọn ngôn ngữ' : language === 'en' ? 'Select Language' : '选择语言'}
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLanguage('vi')}
                  className={`text-center py-2 text-xs font-bold rounded-md border ${
                    language === 'vi'
                      ? 'bg-primary text-white border-primary shadow'
                      : 'text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  VI
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-center py-2 text-xs font-bold rounded-md border ${
                    language === 'en'
                      ? 'bg-primary text-white border-primary shadow'
                      : 'text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('cn')}
                  className={`text-center py-2 text-xs font-bold rounded-md border ${
                    language === 'cn'
                      ? 'bg-primary text-white border-primary shadow'
                      : 'text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  CN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
