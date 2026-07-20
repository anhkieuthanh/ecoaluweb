import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import productsData from '@/data/products.json';
import ProductDetail from '@/components/sections/ProductDetail';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((item) => item.id === id);

  if (!product) {
    return {
      title: "Sản Phẩm Không Tồn Tại | EcoAlu",
    };
  }

  return {
    title: `${product.name.vi} | EcoAlu`,
    description: product.description.vi,
    openGraph: {
      title: product.name.vi,
      description: product.description.vi,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = productsData.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetail productId={id} />;
}
