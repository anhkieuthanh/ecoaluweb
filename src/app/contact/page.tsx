import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/Header';
import Contact from '@/components/sections/Contact';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: "Liên Hệ Hợp Tác & Địa Chỉ Nhà Máy EcoAlu Thanh Hóa",
  description: "Liên hệ trực tiếp với nhà máy nhôm EcoAlu. Trụ sở chính Golden Field Hà Nội & Nhà máy Lô CN-05 Cụm CN Hợp Thắng, Thanh Hóa.",
  keywords: "Liên hệ EcoAlu, địa chỉ nhà máy nhôm Thanh Hóa, trụ sở Hà Nội, bản đồ EcoAlu",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1 pt-20">
        <Contact />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
