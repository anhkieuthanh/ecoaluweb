import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import AboutUs from '@/components/sections/AboutUs';
import Stats from '@/components/sections/Stats';
import Library from '@/components/sections/Library';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Về Chúng Tôi - Nhà Máy Nhôm EcoAlu Thanh Hóa | Tầm Vóc Việt",
  description: "Tìm hiểu chi tiết về tầm nhìn, sứ mệnh, triết lý kinh doanh, ban lãnh đạo và lịch sử phát triển nhà máy nhôm công nghệ cao EcoAlu.",
  keywords: "Giới thiệu EcoAlu, tầm nhìn sứ mệnh, ban lãnh đạo, nhà máy nhôm Thanh Hóa, công nghệ ZheLu",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <AboutUs />
        <Stats />
        <Library />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
