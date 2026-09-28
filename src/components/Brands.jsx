import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const sectionRef = useRef(null);

  const brands = [
    {
      nameEn: 'Volkswagen',
      nameAr: 'فولكس فاجن',
      specialty: 'صيانة دورية شاملة، برمجة كنترولات، وقطع غيار أصلية.',
      tag: 'VW Specialized',
      badge: 'المرتبة الأولى بمصر',
    },
    {
      nameEn: 'Audi',
      nameAr: 'أودي',
      specialty: 'تشخيص أعطال الأنظمة الإلكترونية المعقدة، التيربو، والمحركات الرياضية.',
      tag: 'Audi Diagnostics',
      badge: 'فحص كمبيوتر متقدم',
    },
    {
      nameEn: 'Porsche',
      nameAr: 'بورش',
      specialty: 'فحص وصيانة دقيقة لأنظمة الأداء العالي والميكانيكا المتطورة.',
      tag: 'Porsche Performance',
      badge: 'خدمة سيارات فائقة',
    },
    {
      nameEn: 'SEAT',
      nameAr: 'سيات',
      specialty: 'خدمات ميكانيكا، صيانة فتيس DSG، وتحديث برمجيات القيادة الرياضية.',
      tag: 'SEAT & Leon',
      badge: 'تعديل وبرمجة DSG',
    },
    {
      nameEn: 'Škoda',
      nameAr: 'شكودا',
      specialty: 'صيانة دورية، عمرات محركات TSI، صيانة عفشة ونظام تبريد متكامل.',
      tag: 'Škoda Service',
      badge: 'عمرات محركات معتمدة',
    },
    {
      nameEn: 'Cupra',
      nameAr: 'كوبرا',
      specialty: 'صيانة متخصصة وضبط منظومات القوة والدفع للسيارات الرياضية الحديثة.',
      tag: 'Cupra High-Tech',
      badge: 'أحدث الموديلات',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brands-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.brand-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.92,
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="brands-header text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-vw-red" />
            <span>VAG Group Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            الماركات الألمانية <span className="text-vw-red">المدعومة</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            خبرة متكاملة وأجهزة تشخيص موجهة خصيصاً لسيارات مجموعة فولكس فاجن العالمية، لضمان أعلى درجات التوافق والمطابقة لمواصفات المصنع.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div
              key={b.nameEn}
              className="brand-card group p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative Red Accent Line */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-vw-red/40 to-transparent group-hover:via-vw-red transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-vw-red px-2.5 py-1 rounded bg-vw-red/10 border border-vw-red/20 font-sans">
                    {b.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{b.badge}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-vw-red transition-colors duration-200">
                  {b.nameAr}
                </h3>
                <span className="text-sm font-semibold text-gray-400 font-sans block mb-4">
                  {b.nameEn}
                </span>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                  {b.specialty}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-white transition-colors duration-200">
                <span>قطع غيار + صيانة معتمدة</span>
                <span className="text-vw-red font-mono text-sm">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
