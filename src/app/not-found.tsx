import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 - Không Tìm Thấy Trang | EcoAlu",
  description: "Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-800 px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-7xl font-heading font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-slate-800 mb-3">
          Không Tìm Thấy Trang
        </h2>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          Trang bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc đường dẫn đã được thay đổi.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary hover:bg-emerald-800 text-white font-heading font-bold text-sm px-6 py-3 rounded-md transition-all shadow-md shadow-primary/20"
        >
          Quay Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}
