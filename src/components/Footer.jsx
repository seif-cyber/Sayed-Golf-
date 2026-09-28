import React from 'react';
import { ArrowUp, MapPin, Phone, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-50 bg-[#070404] border-t border-[#ff5050]/20 pt-16 pb-12 px-6 lg:px-12 font-cairo pointer-events-auto">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-6 mb-12 text-right">
          
          {/* Col 1: About (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black text-white tracking-widest uppercase font-mono">
                SAYED GOLF
              </span>
            </div>
            <p className="text-sm text-[#9aa0a8] leading-relaxed max-w-md">
              الخيار الأول لصيانة سيارات بورش وفولكس فاجن. نجمع بين أحدث التقنيات وأفضل المهندسين لتقديم خدمة تليق بسيارتك الفارهة.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.facebook.com/SayedGolf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sayed.golf?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-110 transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ff3535] hover:scale-110 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/201003326060" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:scale-110 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Joseph Tito Branch (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-2 border-b border-white/10 pb-3">فرع جوزيف تيتو</h4>
            <div className="flex gap-3 text-[#9aa0a8] text-sm">
              <MapPin className="w-5 h-5 text-[#ff3535] shrink-0" />
              <p className="leading-relaxed">شارع ١٠ العرايشية - الهايكستب - النزهة الجديدة</p>
            </div>
            <div className="flex items-center gap-3 text-[#9aa0a8] text-sm">
              <Phone className="w-4 h-4 text-[#ff3535] shrink-0" />
              <a href="tel:01003326060" dir="ltr" className="font-mono text-base font-bold text-white hover:text-[#ff3535] transition-colors">0100 3326060</a>
            </div>
            <a href="https://maps.app.goo.gl/vvj13a2jC58SYSpx9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 mt-2 py-2 px-4 rounded border border-white/10 hover:border-[#ff3535]/50 hover:bg-[#ff3535]/10 text-xs font-bold text-white transition-all w-fit uppercase">
              <span>عرض على الخريطة</span>
            </a>
          </div>

          {/* Col 3: Suez Road Branch (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-2 border-b border-white/10 pb-3">فرع طريق السويس</h4>
            <div className="flex gap-3 text-[#9aa0a8] text-sm">
              <MapPin className="w-5 h-5 text-[#ff3535] shrink-0" />
              <p className="leading-relaxed">كارتة مدينتي - طريق السويس</p>
            </div>
            <div className="flex items-center gap-3 text-[#9aa0a8] text-sm">
              <Phone className="w-4 h-4 text-[#ff3535] shrink-0" />
              <a href="tel:01024447800" dir="ltr" className="font-mono text-base font-bold text-white hover:text-[#ff3535] transition-colors">0102 444 7800</a>
            </div>
            <a href="https://maps.app.goo.gl/pH74i3Qv5FaH1xeTA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 mt-2 py-2 px-4 rounded border border-white/10 hover:border-[#ff3535]/50 hover:bg-[#ff3535]/10 text-xs font-bold text-white transition-all w-fit uppercase">
              <span>عرض على الخريطة</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ff5050]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#9aa0a8]">
          <div className="text-center sm:text-right">
            <span>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - SAYED GOLF.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#ff3535] border border-white/10 hover:border-transparent text-white text-xs font-bold transition-all uppercase tracking-widest hover:-translate-y-1"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
