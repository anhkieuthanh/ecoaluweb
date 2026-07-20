import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import Products from '@/components/sections/Products';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Sản Phẩm Nhôm Ingot, Billet & Nhôm Thanh Định Hình | EcoAlu",
  description: "Khám phá danh mục sản phẩm nhôm thỏi Ingot, nhôm thanh Billet và hệ nhôm định hình cao cấp sản xuất trực tiếp từ nhà máy EcoAlu Thanh Hóa.",
  keywords: "Nhôm Ingot, Nhôm Billet, Nhôm Thanh Định Hình, Sản phẩm EcoAlu, Quy cách nhôm công nghiệp",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <Products />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
