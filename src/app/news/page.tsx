import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import News from '@/components/sections/News';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Tin Tức, Sự Kiện & Hoạt Động Doanh Nghiệp | EcoAlu",
  description: "Cập nhật tin tức mới nhất về dự án nhà máy nhôm EcoAlu Thanh Hóa, sự kiện doanh nghiệp, xu hướng thị trường nhôm và hoạt động CSR.",
  keywords: "Tin tức EcoAlu, sự kiện EcoAlu, thị trường nhôm, dự án Thanh Hóa, hoạt động CSR",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <News />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
