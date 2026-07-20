import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import newsData from '@/data/news.json';
import { Calendar, ArrowLeft, Share2, Tag } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

const getArticlesList = (): any[] => {
  return (Array.isArray(newsData) ? newsData : (newsData as any).articles || []) as any[];
};

export async function generateStaticParams() {
  const articles = getArticlesList();
  return articles.map((article) => ({
    id: String(article.id),
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const articles = getArticlesList();
  const article = articles.find((item) => String(item.id) === String(id));

  if (!article) {
    return {
      title: "Bài Viết Không Tồn Tại | EcoAlu",
    };
  }

  const titleVi = article.title?.vi || "Tin tức EcoAlu";
  const summaryVi = article.summary?.vi || "Cập nhật thông tin chi tiết về dự án EcoAlu Thanh Hóa.";

  return {
    title: `${titleVi} | EcoAlu News`,
    description: summaryVi,
    openGraph: {
      title: titleVi,
      description: summaryVi,
      images: [article.image || '/logo.png'],
    },
  };
}

export default async function SingleNewsPage({ params }: ArticlePageProps) {
  const { id } = await params;
  const articles = getArticlesList();
  const article = articles.find((item) => String(item.id) === String(id));

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((item) => String(item.id) !== String(id))
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link
            href="/news/"
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Quay lại danh sách tin tức
          </Link>

          {/* Article Header */}
          <article className="prose prose-slate max-w-none">
            <div className="flex items-center space-x-4 mb-4 text-xs">
              <span className="bg-emerald-50 text-primary font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span className="flex items-center text-slate-400">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {article.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
              {article.title?.vi}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed italic border-l-4 border-primary pl-4 py-1 mb-8 bg-slate-50 rounded-r">
              {article.summary?.vi}
            </p>

            {/* Featured Image */}
            {article.image && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-10 bg-slate-100 border border-slate-150">
                <Image
                  src={article.image}
                  alt={article.title?.vi || 'EcoAlu News Image'}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Article Content Body (Multilingual dynamic content rendering) */}
            <div className="text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base text-justify font-normal">
              <p>
                Dự án nhà máy Nhôm công nghệ cao <strong>EcoAlu</strong> tại Lô CN-05, Cụm công nghiệp Hợp Thắng, Triệu Sơn, Thanh Hóa là bước tiến chiến lược nâng tầm vị thế ngành nhôm Việt Nam trên bản đồ công nghiệp khu vực.
              </p>
              <p>
                Tích hợp dây chuyền công nghệ đùn ép <em>ZheLu Technology</em> kết hợp cánh tay Robot ABB tự động hóa và hệ thống lò kép thế hệ mới, EcoAlu giảm thiểu tới 20% lượng tiêu thụ năng lượng so với công nghệ truyền thống, đồng thời đảm bảo chất lượng nhôm Ingot, Billet đạt chuẩn xuất khẩu quốc tế sang các thị trường Mỹ, Châu Âu (EU) và Nhật Bản.
              </p>
              <p>
                Bên cạnh mục tiêu sản xuất 100.000 tấn/năm, dự án ưu tiên phát triển mô hình kinh tế tuần hoàn với hơn 20.700 m² mảng xanh nội khu, tạo môi trường làm việc đạt chuẩn sinh thái cho hơn 120 kỹ sư và công nhân kỹ thuật cao tại địa phương.
              </p>
            </div>
          </article>

          {/* Related News Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-8">
                Tin tức liên quan khác
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/news/${rel.id}/`}
                    className="group bg-slate-50 border border-slate-150 rounded-xl p-4 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug">
                        {rel.title?.vi}
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-4 block">
                      {rel.date}
                    </span>
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
