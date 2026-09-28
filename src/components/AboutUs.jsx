import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Wrench, Gauge, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });

      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and Cards column (Takes 7 cols on large screens, aligned to right for RTL) */}
          <div className="lg:col-span-7 space-y-8 about-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>نبذة عن الصرح الألماني</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              مركز <span className="text-vw-red">سيد جولف</span>: الشغف الألماني والدقة الهندسية
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              مركز صيانة سيارات متخصص يقع في النزهة الجديدة مع فرع إضافي بطريق السويس (مدينتي). نتميز بتقديم خدمات صيانة متكاملة لسيارات مجموعة فولكس فاجن باستخدام أحدث أجهزة كشف الأعطال والتشخيص الدقيق لضمان أعلى مستويات الأداء والأمان لسيارتك.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              بدأنا من شغف عميق بتفاصيل التكنولوجيا الألمانية، ونمتلك اليوم مركزين مجهزين بأحدث التجهيزات الهندسية والأجهزة التشخيصية الدقيقة لتقديم حلول صيانة جذرية لكافة أعطال الميكانيكا، الفتيس DSG، وبرمجيات السيارات الألمانية.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="about-card p-4 rounded-xl glass-panel glass-panel-hover flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">حلول جذرية للأعطال</h4>
                  <p className="text-xs text-gray-400">تشخيص العطل من أول مرة لتوفير وقتك وتكاليف التخمين العشوائي.</p>
                </div>
              </div>

              <div className="about-card p-4 rounded-xl glass-panel glass-panel-hover flex items-start gap-3">
                <Shield className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">قطع أصلية بضمان</h4>
                  <p className="text-xs text-gray-400">توفير زيوت وقطع غيار أصلية ومستوردة مطابقة لمعايير المصنع.</p>
                </div>
              </div>

              <div className="about-card p-4 rounded-xl glass-panel glass-panel-hover flex items-start gap-3">
                <Wrench className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">تخصص دقيق في DSG</h4>
                  <p className="text-xs text-gray-400">إصلاح الميكاترونيك، معايرة الدبرياج، وبرمجة نواقل الحركة بدقة متناهية.</p>
                </div>
              </div>

              <div className="about-card p-4 rounded-xl glass-panel glass-panel-hover flex items-start gap-3">
                <Gauge className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">فحص ما قبل الشراء</h4>
                  <p className="text-xs text-gray-400">تقرير فني شامل ومفصل يشمل الشاسيه، الصاج، الموتور والكمبيوتر.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Model focal view area (Takes 5 cols for clear visual space) */}
          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto flex items-center justify-center">
            {/* Ambient visual badge overlaid on 3D viewport */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center max-w-xs shadow-2xl backdrop-blur-md">
              <span className="text-4xl font-black text-vw-red block mb-1">+15</span>
              <span className="text-sm font-bold text-white block">عاماً من الخبرة التراكمية</span>
              <span className="text-xs text-gray-400 mt-1 block">في هندسة سيارات فولكس فاجن، أودي، بورش، سيات، وشكودا</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
