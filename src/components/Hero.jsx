import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, ShieldCheck, Cpu, Award, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
      gsap.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        delay: 0.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });
      gsap.from('.hero-cta', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });
      gsap.from('.hero-highlights', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden pointer-events-auto"
    >
      {/* Background radial gradient spotlight for luxury automotive feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-vw-black/40 via-transparent to-vw-black/90 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-8 sm:mt-14">
        {/* German Engineering Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs sm:text-sm font-bold tracking-wide mb-6">
          <Award className="w-4 h-4" />
          <span>المركز الأول المتخصص في تكنولوجيا سيارات VAG الألمانية</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
          مركز <span className="text-transparent bg-clip-text bg-gradient-to-r from-vw-red via-red-500 to-white">سيد جولف</span> لصيانة سيارات مجموعة فولكس فاجن
        </h1>

        {/* Subheadline */}
        <p className="hero-sub text-base sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
          خبراء صيانة متقدمة وقطع غيار أصلية لسيارات{' '}
          <span className="text-white font-bold">VW, Audi, SEAT, Škoda, Porsche, Cupra</span> بأحدث المعايير القياسية العالمية.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="tel:01003326060"
            className="hero-cta flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-vw-red hover:bg-vw-redHover text-white text-base sm:text-lg font-bold shadow-xl shadow-vw-red/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>اتصل الآن: 0100 3326060</span>
          </a>
          <a
            href="https://wa.me/201003326060?text=مرحبا،%20أرغب%20في%20حجز%20موعد%20صيانة%20لسيارتي"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-panel text-white hover:text-vw-red text-base sm:text-lg font-bold hover:border-vw-red/60 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-green-500" />
            <span>احجز عبر واتساب</span>
          </a>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="hero-highlights grid grid-cols-1 md:grid-cols-3 gap-4 glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-vw-red/20 border border-vw-red/40 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6 text-vw-red" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">مهندسون متخصصون</h4>
              <p className="text-xs text-gray-400">خبرة هندسية عميقة بمجموعة VAG الألمانية</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 md:border-r md:border-white/10">
            <div className="w-12 h-12 rounded-xl bg-vw-red/20 border border-vw-red/40 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-vw-red" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">أجهزة فحص معتمدة</h4>
              <p className="text-xs text-gray-400">أحدث برمجيات التشخيص الرسمية ODIS</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 md:border-r md:border-white/10">
            <div className="w-12 h-12 rounded-xl bg-vw-red/20 border border-vw-red/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-vw-red" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">ضمان معتمد</h4>
              <p className="text-xs text-gray-400">ضمان حقيقي على كافة الصيانات وقطع الغيار</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center mt-10 text-gray-400 text-xs gap-2 animate-bounce">
          <span>مرر للأسفل لاكتشاف خدماتنا والمجسم التفاعلي</span>
          <ChevronDown className="w-4 h-4 text-vw-red" />
        </div>
      </div>
    </section>
  );
}
