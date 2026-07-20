import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import ESG from '@/components/sections/ESG';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Báo Cáo Phát Triển Bền Vững (ESG) & Kinh Tế Tuần Hoàn | EcoAlu",
  description: "Chiến lược phát triển xanh, bảo vệ môi trường, trách nhiệm xã hội và mô hình quản trị thông minh tại nhà máy nhôm EcoAlu.",
  keywords: "ESG EcoAlu, phát triển bền vững, kinh tế tuần hoàn, nhôm xanh, tiết kiệm năng lượng, cây xanh nội khu",
};

export default function ESGPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <ESG />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
