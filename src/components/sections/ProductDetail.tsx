'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import productsData from '@/data/products.json';
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { language, t } = useLanguage();
  const product = productsData.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  const detail = (product as any).detail;
  const otherProducts = productsData.filter((item) => item.id !== productId);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/products/"
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            {t('products_sec', 'back_to_list')}
          </Link>

          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-primary-light text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
            {product.name[language] || product.name.vi}
          </h1>

          {/* Featured Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-10 bg-slate-100 border border-slate-150">
            <Image
              src={product.image}
              alt={product.name[language] || product.name.vi}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 text-left">
              {(detail?.intro?.[language] || detail?.intro?.vi) || product.description[language] || product.description.vi}
            </p>
            {detail?.intro2 && (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-10 text-left">
                {detail.intro2[language] || detail.intro2.vi}
              </p>
            )}
          </div>

          {/* Specs & Capacity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-150">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                {t('products_sec', 'specs_label')}
              </span>
              <div className="space-y-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-150 flex flex-col justify-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                {t('products_sec', 'capacity_label')}
              </span>
              <span className="text-xl font-bold text-primary">
                {product.capacity[language] || product.capacity.vi}
              </span>
            </div>
          </div>

          {/* Advantages */}
          {detail?.advantages && (
            <div className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                {detail.advantagesTitle?.[language] || detail.advantagesTitle?.vi}
              </h2>
              <div className="space-y-6">
                {detail.advantages.map((adv: any, i: number) => (
                  <div key={i} className="p-5 rounded-xl bg-glass border border-slate-150 shadow-sm">
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2">
                      {adv.title[language] || adv.title.vi}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed text-left">
                      {adv.desc[language] || adv.desc.vi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alloy composition table */}
          {detail?.specTable && (
            <div className="mb-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-6">
                {detail.specTable.caption?.[language] || detail.specTable.caption?.vi}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-slate-150 shadow-sm">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      {detail.specTable.columns.map((col: string, i: number) => (
                        <th key={i} className="px-3 py-2.5 font-bold text-left whitespace-nowrap">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detail.specTable.rows.map((row: string[], i: number) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`px-3 py-2 whitespace-nowrap ${
                              j === 0 ? 'font-bold text-slate-800' : 'text-slate-600'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Certifications */}
          {detail?.certifications && (
            <div className="mb-12 p-6 rounded-xl bg-primary-light border border-primary/10">
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-3 flex items-center">
                <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                {t('products_sec', 'certifications_label')}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {detail.certifications.map((cert: string, i: number) => (
                  <span
                    key={i}
                    className="bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              {detail.certNote && (
                <p className="text-sm text-slate-600 leading-relaxed text-left">
                  {detail.certNote[language] || detail.certNote.vi}
                </p>
              )}
            </div>
          )}

          {/* Other products */}
          {otherProducts.length > 0 && (
            <div className="pt-10 border-t border-slate-200">
              <h3 className="text-lg font-heading font-bold text-slate-800 mb-6">
                {t('products_sec', 'other_products')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}/`}
                    className="group flex items-center space-x-4 bg-slate-50 border border-slate-150 rounded-xl p-4 hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                      <Image src={p.image} alt={p.name.vi} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                        {p.name[language] || p.name.vi}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {p.description[language] || p.description.vi}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
