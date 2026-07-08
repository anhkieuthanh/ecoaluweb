'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
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
    { id: 'about', label: t('nav', 'about'), hasSubmenu: true },
    { id: 'products', label: t('nav', 'products'), hasSubmenu: true },
    { id: 'solutions', label: t('nav', 'solutions'), hasSubmenu: false },
    { id: 'esg', label: t('nav', 'esg'), hasSubmenu: false },
    { id: 'news', label: t('nav', 'news'), hasSubmenu: false },
    { id: 'contact', label: t('nav', 'contact'), hasSubmenu: false },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
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

  const getSubmenuItems = (id: string) => {
    if (id === 'about') {
      return [
        { label: t('about', 'vision_mission'), target: 'about' },
        { label: t('about', 'board'), target: 'about' },
        { label: t('about', 'philosophy'), target: 'about' },
      ];
    }
    if (id === 'products') {
      return [
        { label: language === 'vi' ? 'Nhôm Thỏi (Ingot)' : language === 'en' ? 'Aluminum Ingot' : '铝锭', target: 'products' },
        { label: language === 'vi' ? 'Nhôm Billet' : language === 'en' ? 'Aluminum Billet' : '铝圆棒', target: 'products' },
        { label: language === 'vi' ? 'Nhôm Định Hình' : language === 'en' ? 'Aluminum Profiles' : '铝型材', target: 'products' },
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
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                isScrolled ? 'text-primary' : 'text-gradient-green'
              }`}>
                ECOALU
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-4 items-center">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => item.hasSubmenu && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center text-sm font-heading font-semibold transition-colors duration-200 px-3 py-2 rounded-md ${
                      isScrolled ? 'text-slate-800 hover:text-primary' : 'text-slate-200 hover:text-accent-green'
                    }`}
                  >
                    {item.label}
                    {item.hasSubmenu && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasSubmenu && activeDropdown === item.id && (
                    <div className="absolute left-0 mt-0 w-56 rounded-md shadow-xl bg-glass-heavy ring-1 ring-black/5 overflow-hidden transform opacity-100 scale-100 transition-all duration-200">
                      <div className="py-1">
                        {getSubmenuItems(item.id).map((subItem, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setActiveDropdown(null);
                              handleNavClick(subItem.target);
                            }}
                            className="block w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-primary-light hover:text-primary transition-all duration-200 border-b border-slate-100 last:border-b-0"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className={`hidden lg:flex items-center space-x-2 border-l pl-4 ${
              isScrolled ? 'border-slate-200 text-slate-700' : 'border-white/20 text-slate-200'
            }`}>
              <Globe className="h-4 w-4" />
              <button
                onClick={() => setLanguage('vi')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  language === 'vi'
                    ? 'bg-primary text-white shadow'
                    : isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  language === 'en'
                    ? 'bg-primary text-white shadow'
                    : isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('cn')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  language === 'cn'
                    ? 'bg-primary text-white shadow'
                    : isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                CN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-4">
              {/* Language Selector Mobile Quick Switch */}
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-md border ${
                isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-white/5 border-white/10'
              }`}>
                <Globe className={`h-3 w-3 ${isScrolled ? 'text-slate-500' : 'text-slate-400'}`} />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className={`bg-transparent text-xs font-bold focus:outline-none border-none cursor-pointer ${
                    isScrolled ? 'text-slate-800' : 'text-slate-350'
                  }`}
                >
                  <option value="vi" className="bg-slate-900 text-slate-200">VI</option>
                  <option value="en" className="bg-slate-900 text-slate-200">EN</option>
                  <option value="cn" className="bg-slate-900 text-slate-200">CN</option>
                </select>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors duration-200 focus:outline-none p-1 rounded border ${
                  isScrolled 
                    ? 'text-slate-800 border-slate-200 hover:bg-slate-100' 
                    : 'text-slate-350 border-white/10 hover:bg-white/10'
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
        className={`fixed inset-0 z-45 lg:hidden transform transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Drawer container */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-glass-heavy shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full py-6 px-5 justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center">
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
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded bg-slate-100 text-slate-500 hover:text-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.id} className="flex flex-col border-b border-slate-100 pb-2">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="text-left text-base font-semibold font-heading text-slate-800 hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                    {item.hasSubmenu && (
                      <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-slate-200 py-1">
                        {getSubmenuItems(item.id).map((subItem, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              handleNavClick(subItem.target);
                            }}
                            className="text-left text-xs font-medium text-slate-500 hover:text-primary transition-colors duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Languages and Copyright bottom */}
            <div className="border-t border-slate-200 pt-6">
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
