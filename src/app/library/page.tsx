import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import Library from '@/components/sections/Library';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Thư Viện Ảnh, Video & Sơ Đồ 3D Mặt Bằng Nhà Máy | EcoAlu",
  description: "Khám phá sơ đồ 3D mặt bằng tổng thể nhà máy EcoAlu Thanh Hóa, thư viện hình ảnh công nghệ sản xuất và tài liệu giới thiệu.",
  keywords: "Sơ đồ 3D nhà máy, mặt bằng EcoAlu, hình ảnh nhà máy Thanh Hóa, tài liệu kỹ thuật nhôm",
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <Library />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
