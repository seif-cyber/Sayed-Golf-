import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-vw-black border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 pointer-events-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-vw-red/40 p-0.5 bg-black">
                <img
                  src="./images/logo.jpg"
                  alt="Sayed Golf"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-wide">
                مركز <span className="text-vw-red">سيد جولف</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
              الصرح الهندسي الرائد في مصر المتخصص في صيانة وبرمجة وإصلاح كافة أعطال سيارات مجموعة فولكس فاجن (VW, Audi, SEAT, Škoda, Porsche, Cupra) مع توفير قطع الغيار الأصلية والضمان الشامل.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">أقسام الموقع</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-vw-red transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-vw-red transition-colors">نبذة عن المركز</a></li>
              <li><a href="#services" className="hover:text-vw-red transition-colors">خدمات الصيانة</a></li>
              <li><a href="#brands" className="hover:text-vw-red transition-colors">الماركات الألمانية</a></li>
              <li><a href="#why-us" className="hover:text-vw-red transition-colors">لماذا سيد جولف؟</a></li>
              <li><a href="#contact" className="hover:text-vw-red transition-colors">الفروع والتواصل</a></li>
            </ul>
          </div>

          {/* Col 3: Branches & Hotline */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">خدمة العملاء والحجز</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <p>
                <strong className="text-white">الهاتف الموحد / واتساب:</strong><br />
                <a href="tel:01003326060" className="text-vw-red font-bold font-mono">0100 3326060</a>
              </p>
              <p>
                <strong className="text-white">فرع طريق السويس:</strong><br />
                <a href="tel:01024447800" className="text-vw-red font-bold font-mono">01024447800</a>
              </p>
              <p className="text-xs text-gray-500 pt-1">
                ساعات العمل: 10 ص - 10 م يومياً (عدا الأحد)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()} لمركز سيد جولف (Sayed Golf).</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-vw-gray hover:bg-vw-lightgray text-white text-xs font-bold transition-colors"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5 text-vw-red" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
