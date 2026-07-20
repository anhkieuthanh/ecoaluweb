import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Stats from '@/components/sections/Stats';
import Distribution from '@/components/sections/Distribution';
import Products from '@/components/sections/Products';
import Solutions from '@/components/sections/Solutions';
import ESG from '@/components/sections/ESG';
import Library from '@/components/sections/Library';
import News from '@/components/sections/News';
import Partners from '@/components/sections/Partners';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "EcoAlu - Nhà Máy Nhôm Công Nghệ Cao | Tầm Vóc Việt",
  description: "Dự án nhà máy Nhôm công nghệ cao ECOALU tại Thanh Hóa - Giải pháp cung ứng nhôm Ingot, Billet chất lượng cao hướng tới kinh tế tuần hoàn.",
  keywords: "EcoAlu, nhôm công nghệ cao, nhôm ingot, nhôm billet, nhôm tái chế, kinh tế tuần hoàn, Thanh Hóa",
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#041221] text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Stats />
        <Distribution />
        <Products />
        <Solutions />
        <ESG />
        <Library />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
