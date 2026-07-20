import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import Solutions from '@/components/sections/Solutions';
import Distribution from '@/components/sections/Distribution';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Giải Pháp Chuỗi Cung Ứng & Logistics Thông Minh | EcoAlu",
  description: "Giải pháp cung ứng nguồn nguyên liệu nhôm nội địa, xuất khẩu quốc tế và vị trí kết nối Logistics chiến lược tại Cửa khẩu Cầu Treo & Cảng Nghi Sơn.",
  keywords: "Giải pháp cung ứng nhôm, logistics nhôm, cửa khẩu Cầu Treo, cảng Nghi Sơn, xuất khẩu nhôm",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <Solutions />
        <Distribution />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
