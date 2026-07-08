'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [activeBranch, setActiveBranch] = useState<'hn' | 'factory'>('hn');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const branches = {
    hn: {
      name: t('contact_sec', 'branch_hn'),
      address: language === 'vi' 
        ? 'Tòa nhà Golden Field, 24 Nguyễn Cơ Thạch, Mỹ Đình, Nam Từ Liêm, Hà Nội' 
        : language === 'en' 
        ? 'Golden Field Building, 24 Nguyen Co Thach Street, My Dinh, Nam Tu Liem, Hanoi' 
        : '河内市南慈廉郡美亭阮基石路24号Golden Field大楼',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.113098555896!2d105.7679313!3d21.0282361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b5dfd46429%3A0xb5b79658db4ed075!2zVG_DoCBuaMOgIEdvbGRlbiBGaWVsZA!5e0!3m2!1svi!2s!4v1710000000000',
    },
    factory: {
      name: t('contact_sec', 'branch_factory'),
      address: language === 'vi' 
        ? 'Lô CN-05, Cụm công nghiệp Hợp Thắng, Triệu Sơn, Thanh Hóa' 
        : language === 'en' 
        ? 'Lot CN-05, Hop Thang Industrial Cluster, Trieu Son, Thanh Hoa' 
        : '清化省赵山县合胜工业区CN-05地块',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.02325991823!2d105.590123!3d19.789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313651b74bb85e67%3A0xe5a3c6179e8e91cf!2zQ-G7pW0gY8O0bmcgbmdoaeG7h3AgSOG7o3AgVGjhuq9uZw!5e0!3m2!1svi!2s!4v1710000000001',
    },
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-primary tracking-wide uppercase"
          >
            {t('contact_sec', 'title')}
          </motion.h2>
          <div className="h-1 bg-primary w-16 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info & Maps (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="mb-8">
              {/* Phone & Email cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <a href="tel:+84123456789" className="p-4 rounded-xl bg-glass border border-slate-150 hover:border-primary/20 flex items-center space-x-3.5 transition-all duration-300 shadow-sm">
                  <div className="p-2.5 bg-primary-light text-primary rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Hotline</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">+84 (0) 123 456 789</span>
                  </div>
                </a>
                <a href="mailto:info@ecoalu.com.vn" className="p-4 rounded-xl bg-glass border border-slate-150 hover:border-primary/20 flex items-center space-x-3.5 transition-all duration-300 shadow-sm">
                  <div className="p-2.5 bg-primary-light text-primary rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">info@ecoalu.com.vn</span>
                  </div>
                </a>
              </div>

              {/* Branch Selector Tabs */}
              <div className="flex bg-slate-100 p-1.5 rounded-lg border border-slate-200 mb-4">
                {(['hn', 'factory'] as const).map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setActiveBranch(branch)}
                    className={`flex-1 text-center py-2 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                      activeBranch === branch
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-slate-500 hover:text-primary'
                    }`}
                  >
                    {branch === 'hn' 
                      ? (language === 'vi' ? 'Trụ sở chính' : language === 'en' ? 'Headquarters' : '总部') 
                      : (language === 'vi' ? 'Nhà máy' : language === 'en' ? 'Factory' : '工厂')}
                  </button>
                ))}
              </div>

              {/* Address card */}
              <div className="p-4 rounded-xl bg-glass border border-slate-150 flex items-start space-x-3 shadow-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{branches[activeBranch].name}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{branches[activeBranch].address}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <iframe
                src={branches[activeBranch].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-glass-heavy border border-slate-150 backdrop-blur shadow-xl flex flex-col justify-between h-full relative">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-primary mb-6">
                {language === 'vi' ? 'Gửi Yêu Cầu Liên Hệ' : language === 'en' ? 'Send Inquiry Request' : '发送联络请求'}
              </h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <CheckCircle className="h-16 w-16 text-primary mb-4 animate-bounce" />
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                      {language === 'vi' ? 'Gửi thành công!' : 'Submitted Successfully!'}
                    </h4>
                    <p className="text-xs text-slate-500 px-4">
                      {t('contact_sec', 'form_success')}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        {t('contact_sec', 'form_name')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-md py-2.5 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                        placeholder={language === 'vi' ? 'Nhập họ và tên...' : 'Enter full name...'}
                      />
                    </div>

                    {/* Phone & Email grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          {t('contact_sec', 'form_phone')}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md py-2.5 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                          placeholder={language === 'vi' ? 'Nhập số điện thoại...' : 'Enter phone number...'}
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          {t('contact_sec', 'form_email')}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md py-2.5 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                          placeholder={language === 'vi' ? 'Nhập email (nếu có)...' : 'Enter email (optional)...'}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        {t('contact_sec', 'form_message')}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-md py-2.5 px-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                        placeholder={language === 'vi' ? 'Nhập nội dung cần hỗ trợ hợp tác...' : 'Enter message details...'}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-opacity-95 text-white py-3 rounded-md font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{t('contact_sec', 'form_submit')}</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
