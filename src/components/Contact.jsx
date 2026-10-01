import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Instagram, Facebook, Navigation } from 'lucide-react';
import FadeUp from './FadeUp';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <FadeUp>
          <div className="contact-header text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4 text-vw-red" />
              <span>فروعنا وخدمة العملاء</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              فروع مركز <span className="text-vw-red">سيد جولف</span> ومعلومات التواصل
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              يسعدنا استقبالكم في فرعينا بالقاهرة لتشخيص وصيانة سياراتكم بأعلى كفاءة وسرعة.
            </p>
          </div>
        </FadeUp>

        {/* Working Hours Bar */}
        <FadeUp delay={100}>
          <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-center gap-3 text-sm text-gray-300">
            <Clock className="w-5 h-5 text-vw-red shrink-0" />
            <span>
              <strong className="text-white">مواعيد العمل:</strong> يومياً من الساعة <strong className="text-vw-red font-mono">10:00 صباحاً</strong> حتى <strong className="text-vw-red font-mono">10:00 مساءً</strong> (ما عدا يوم الأحد عطلة أسبوعية).
            </span>
          </div>
        </FadeUp>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Branch 1: El Nozha El Gedida */}
          <FadeUp delay={150}>
            <div className="branch-box h-full p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vw-red/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-vw-red text-white text-xs font-bold">
                  <span>الفرع الرئيسي</span>
                </div>
                <span className="text-xs text-vw-silver">النزهة الجديدة / الهايكستب</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                فرع النزهة الجديدة (محور جوزيف تيتو)
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                  <span>
                    شارع 10 العرايشية - الهايكستب - محور جوزيف تيتو، النزهة الجديدة، القاهرة (أمام محطة بنزين وطنية).
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-5 h-5 text-vw-red shrink-0" />
                  <a href="tel:01003326060" className="hover:text-vw-red font-mono font-bold transition-colors">
                    0100 3326060
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/yoAf1QSfcysQBp2x7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-vw-gray hover:bg-vw-lightgray text-white text-xs sm:text-sm font-bold border border-white/10 transition-colors"
              >
                <Navigation className="w-4 h-4 text-vw-red" />
                <span>الاتجاهات على خرائط جوجل</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href="tel:01003326060"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-vw-red hover:bg-vw-redHover text-white text-xs sm:text-sm font-bold transition-colors shadow-lg shadow-vw-red/30"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال مباشر</span>
              </a>
            </div>
            </div>
          </FadeUp>

          {/* Branch 2: Suez Road (Madinaty) */}
          <FadeUp delay={250}>
            <div className="branch-box h-full p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vw-red/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-vw-gray text-vw-silver border border-white/10 text-xs font-bold">
                    <span>فرع طريق السويس</span>
                  </div>
                  <span className="text-xs text-vw-silver">شرق القاهرة / مدينتي</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-4">
                  فرع طريق السويس (كارتة مدينتي)
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <MapPin className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                    <span>
                      طريق السويس - بالقرب من كارتة مدينتي وسوق السيارات الجديد، القاهرة.
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone className="w-5 h-5 text-vw-red shrink-0" />
                    <a href="tel:01024447800" className="hover:text-vw-red font-mono font-bold transition-colors">
                      01024447800
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/201024447800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-vw-gray hover:bg-vw-lightgray text-white text-xs sm:text-sm font-bold border border-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span>حجز عبر واتساب الفرع</span>
                </a>

                <a
                  href="tel:01024447800"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-vw-red hover:bg-vw-redHover text-white text-xs sm:text-sm font-bold transition-colors shadow-lg shadow-vw-red/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Social and Quick Reach Bar */}
        <FadeUp delay={300}>
          <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <h4 className="text-lg font-bold text-white mb-1">تابع أعمالنا ويوميات الورشة</h4>
              <p className="text-xs text-gray-400">فيديوهات حصرية لصيانة المحركات والفتيس وعمليات الإصلاح المعقدة</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/sayed.golf/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>@sayed.golf</span>
              </a>

              <a
                href="https://www.facebook.com/SayedGolf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>SayedGolf</span>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
