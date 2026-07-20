'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, History, Network, Heart } from 'lucide-react';

export default function AboutUs() {
  const { t, language } = useLanguage();

  const details = [
    {
      icon: Target,
      title: t('about', 'vision_mission'),
      desc: language === 'vi' ? 'Định hình tương lai sản xuất nhôm xanh công nghệ cao.' : language === 'en' ? 'Shaping the future of green high-tech aluminum.' : '塑造绿色高科技铝业的未来。',
    },
    {
      icon: Users,
      title: t('about', 'board'),
      desc: language === 'vi' ? 'Đội ngũ lãnh đạo bản lĩnh, giàu kinh nghiệm quốc tế.' : language === 'en' ? 'Experienced board with global industry insight.' : '拥有丰富国际经验的干练领导团队。',
    },
    {
      icon: Lightbulb,
      title: t('about', 'philosophy'),
      desc: language === 'vi' ? 'Phát triển dựa trên nghiên cứu và phát triển xanh bền vững.' : language === 'en' ? 'Growth driven by sustainable R&D and green practices.' : '基于可持续研发和绿色实践的发展。',
    },
    {
      icon: History,
      title: t('about', 'history'),
      desc: language === 'vi' ? 'Hành trình vượt bậc khẳng định vị thế nhôm Việt.' : language === 'en' ? 'An outstanding journey cementing Vietnamese aluminum.' : '确立越南铝业地位的卓越历程。',
    },
    {
      icon: Network,
      title: t('about', 'structure'),
      desc: language === 'vi' ? 'Vận hành tối ưu với quản trị thông minh chuẩn quốc tế.' : language === 'en' ? 'Optimized operations under smart global standards.' : '通过国际标准智能治理优化运行。',
    },
    {
      icon: Heart,
      title: t('about', 'culture'),
      desc: language === 'vi' ? 'Đồng lòng kiến tạo, an toàn là nền tảng cốt lõi.' : language === 'en' ? 'Co-creation with safety as our core cornerstone.' : '通力创造，安全是核心基石。',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary tracking-wide uppercase"
          >
            {t('about', 'title')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose max-w-none text-slate-600 mb-8 space-y-4">
              <p className="text-left text-sm sm:text-base leading-relaxed">
                {t('about', 'intro_p1')}
              </p>
              <p className="text-left text-sm sm:text-base leading-relaxed">
                {t('about', 'intro_p2')}
              </p>
              <p className="text-left text-sm sm:text-base leading-relaxed">
                {t('about', 'intro_p3')}
              </p>
            </div>

            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {details.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-lg bg-glass border border-slate-100 hover:border-primary/20 hover:bg-primary-light/20 transition-all duration-300 group flex items-start space-x-4"
                  >
                    <div className="p-2.5 rounded bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Factory Isometric layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-150 shadow-xl bg-slate-50 group">
              <Image
                src="/images/factory-layout.png"
                alt="EcoAlu Smart Factory Layout"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-glass-heavy border border-slate-200">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  {language === 'vi' ? 'Mô hình quy hoạch nhà máy 3D' : language === 'en' ? '3D Factory Layout Model' : '3D工厂规划模型'}
                </p>
                <p className="text-xs text-slate-600">
                  {language === 'vi' ? 'Quy hoạch tối ưu 103.621,1m2 phục vụ sản xuất tuần hoàn khép kín' : language === 'en' ? 'Optimal layout of 103,621.1m2 for closed-loop circular production' : '优化规划103,621.1平方米以服务闭环循环生产'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
