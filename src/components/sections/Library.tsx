'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Video as VideoIcon, Play, X, Eye } from 'lucide-react';

export default function Library() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const photos = [
    { id: 1, src: '/images/hero-factory-1.png', title: language === 'vi' ? 'Dây chuyền đùn ép tự động' : 'Automated Extrusion Line' },
    { id: 2, src: '/images/hero-factory-2.png', title: language === 'vi' ? 'Lò đúc và cánh tay Robot' : 'Casting Furnace & Robot Arms' },
    { id: 3, src: '/images/hero-factory-3.png', title: language === 'vi' ? 'Kho hàng thành phẩm Ingot & Billet' : 'Ingot & Billet Finished Warehouse' },
    { id: 4, src: '/images/factory-layout.png', title: language === 'vi' ? 'Quy hoạch Cụm Công Nghiệp' : 'Industrial Cluster Layout' },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: '/images/hero-factory-1.png',
      title: language === 'vi' ? 'Flycam toàn cảnh tiến độ xây dựng nhà máy' : 'Flycam overview of factory construction progress',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      thumbnail: '/images/hero-factory-2.png',
      title: language === 'vi' ? 'Vận hành thử nghiệm lò đúc song song robot ABB' : 'Testing furnace operation with ABB robots',
      url: 'https://www.w3schools.com/html/movie.mp4'
    }
  ];

  return (
    <section className="py-20 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary tracking-wide uppercase">
              {language === 'vi' ? 'Thư Viện Ảnh & Video' : language === 'en' ? 'Photo & Video Library' : '图集与视频库'}
            </h2>
            <div className="h-1 bg-primary w-16 mt-4 rounded-full" />
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-2 mt-6 md:mt-0">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center space-x-2 px-4 py-2 rounded text-xs font-bold transition-all duration-300 border cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-primary border-primary text-white shadow'
                  : 'bg-glass border-slate-200 text-slate-600 hover:border-primary/20 hover:text-primary'
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              <span>{language === 'vi' ? 'Hình ảnh' : language === 'en' ? 'Photos' : '图片'}</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-4 py-2 rounded text-xs font-bold transition-all duration-300 border cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-primary border-primary text-white shadow'
                  : 'bg-glass border-slate-200 text-slate-600 hover:border-primary/20 hover:text-primary'
              }`}
            >
              <VideoIcon className="h-4 w-4" />
              <span>Video</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {activeTab === 'photos'
              ? photos.map((photo) => (
                  <motion.div
                    key={`photo-${photo.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedMedia(photo.src)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-slate-100 cursor-pointer"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-primary text-white rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="h-5 w-5" />
                      </div>
                    </div>
                    {/* Title Banner */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950/70 to-transparent">
                      <p className="text-xs font-semibold text-slate-200 line-clamp-1">{photo.title}</p>
                    </div>
                  </motion.div>
                ))
              : videos.map((video) => (
                  <motion.div
                    key={`video-${video.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedMedia(video.url)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-slate-100 cursor-pointer col-span-1 sm:col-span-2"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-103 brightness-90"
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 bg-primary text-white rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 fill-white" />
                      </div>
                    </div>
                    {/* Title Banner */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/70 to-transparent">
                      <p className="text-sm font-semibold text-white">{video.title}</p>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-6 right-6 p-2 bg-slate-900 text-slate-350 hover:text-white rounded-full border border-white/10"
              >
                <X className="h-6 w-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950"
              >
                {selectedMedia.endsWith('.mp4') ? (
                  <video
                    src={selectedMedia}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedMedia}
                    alt="Enlarged gallery item"
                    fill
                    className="object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
