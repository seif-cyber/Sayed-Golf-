import React, { useEffect, useRef } from 'react';
import { Cpu, Cog, Activity, ShieldCheck, SearchCheck, Disc, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  const services = [
    {
      id: '01',
      title: 'كشف الأعطال بالكمبيوتر والبرمجة',
      subtitle: 'Computer Diagnostics & Coding',
      desc: 'تشخيص دقيق وشامل لكافة أنظمة السيارة، الحساسات، والكنترولات، مع تفعيل الخصائص والميزات المخفية وبرمجة التحديثات الرسمية.',
      image: './images/diagnostics.jpg',
      icon: Cpu,
      brands: 'برمجيات معتمدة من VAG',
    },
    {
      id: '02',
      title: 'صيانة المحركات والعمرات الكاملة',
      subtitle: 'Engine Overhauls (TSI / TFSI / MPI)',
      desc: 'صيانة متخصصة وتوضيب محركات التيربو وحقن الوقود المباشر بأعلى دقة ووفق المعايير القياسية لكتالوج المصنع الألماني.',
      image: './images/engine.jpg',
      icon: Cog,
      brands: 'TSI • TFSI • MPI',
    },
    {
      id: '03',
      title: 'صيانة فتيس DSG ونواقل الحركة',
      subtitle: 'DSG Transmission Specialists',
      desc: 'كشف وإصلاح مشاكل وحدة الميكاترونيك (Mechatronic)، تبديل طقم الدبرياج المزدوج (Dual Clutch)، وتغيير زيوت DSG الأصلية.',
      image: './images/transmission.jpg',
      icon: Activity,
      brands: 'DQ200 • DQ250 • DQ381 • DQ500',
    },
    {
      id: '04',
      title: 'العفشة، الفرامل، وأنظمة التعليق',
      subtitle: 'Suspension & High Performance Brakes',
      desc: 'ضبط العفشة، صيانة أنظمة التعليق الرياضي والعادي، ترقية منظومة الفرامل بأقراص وتيل أصلي يضمن أعلى درجات الثبات.',
      image: './images/suspension.jpg',
      icon: Disc,
      brands: 'أنظمة تعليق رياضية وهيدروليكية',
    },
    {
      id: '05',
      title: 'فحص السيارات قبل الشراء',
      subtitle: 'Pre-purchase Comprehensive Inspection',
      desc: 'تقرير فني شامل ومفصل يشمل فحص الشاسيه، الصاج، الموتور، كفاءة الفتيس، وقراءة الكمبيوتر لكشف أي تلاعب أو أعطال مخفية.',
      image: './images/diagnostics.jpg',
      icon: SearchCheck,
      brands: 'تقرير فني معتمد بنقاط فحص 120+',
    },
    {
      id: '06',
      title: 'قطع الغيار الأصلية والسوائل المعتمدة',
      subtitle: 'Original Spare Parts & Fluids',
      desc: 'موزع معتمد لكبرى العلامات العالمية الموصى بها لمجموعة فولكس فاجن: Bosch, Mann-Filter, DAYCO, Total Quartz مع توفير قطع استيراد أوروبية زيرو.',
      image: './images/engine.jpg',
      icon: ShieldCheck,
      brands: 'Bosch • Mann-Filter • DAYCO • Quartz',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.services-header', {
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

      // Animated cards coming from the sides (odd from right, even from left)
      gsap.from('.service-card-right', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.service-card-left', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 pointer-events-auto overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="services-header text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs font-bold uppercase tracking-wider mb-4">
            <Cog className="w-4 h-4 animate-spin text-vw-red" style={{ animationDuration: '6s' }} />
            <span>خدمات هندسية متكاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            حلول صيانة شاملة بمعايير <span className="text-vw-red">الوكالة الألمانية</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            نقدم لك باقة خدمات متطورة تغطي كافة احتياجات سيارتك من الفحص المبدئي وحتى أعقد عمليات البرمجة وتوضيب المحركات ونواقل الحركة.
          </p>
        </div>

        {/* Services Grid with Cards coming from sides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const sideClass = idx % 2 === 0 ? 'service-card-right' : 'service-card-left';
            return (
              <div
                key={srv.id}
                className={`${sideClass} group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between`}
              >
                {/* Image Banner on Card Top with overlay */}
                <div className="relative h-44 w-full overflow-hidden bg-vw-gray">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vw-dark via-vw-dark/40 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 bg-vw-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-bold text-vw-red flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{srv.id}</span>
                  </div>

                  <div className="absolute bottom-3 right-4 left-4">
                    <span className="text-[11px] font-semibold text-vw-red tracking-wider block font-sans">
                      {srv.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-vw-red transition-colors duration-200">
                      {srv.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Brand Tag & Action link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400">
                      {srv.brands}
                    </span>
                    <a
                      href="https://wa.me/201003326060?text=استفسار%20عن%20خدمة%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-vw-red group-hover:translate-x-[-4px] transition-transform duration-200"
                    >
                      <span>احجز الآن</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
