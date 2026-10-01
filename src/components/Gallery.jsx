import React from 'react';
import FadeUp from './FadeUp';
import { Cpu, Wrench, Disc, ShieldCheck } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'فحص وتشخيص كمبيوتر متقدم',
      category: 'برمجة VAG ODIS',
      description: 'أحدث أجهزة التشخيص الأصلية لقراءة أعطال وبرمجة كمبيوتر سيارات بورش، أودي، وفولكس فاجن.',
      image: `${import.meta.env.BASE_URL}assets/gallery/gallery_1_diagnostics.jpg`,
      icon: Cpu,
    },
    {
      title: 'توضيب وصيانة المحركات الألمانية',
      category: 'هندسة دقيقة',
      description: 'عمرات كاملة وتجميع ميكانيكي عالي الدقة لمحركات التوين توربو وأنظمة نقل الحركة المزدوجة DSG.',
      image: `${import.meta.env.BASE_URL}assets/gallery/gallery_2_engine.jpg`,
      icon: Wrench,
    },
    {
      title: 'أنظمة الفرامل والعفشة الرياضية',
      category: 'أداء وثبات',
      description: 'صيانة وتحديث مكابح الكاربون سيراميك والمساعدين الرياضيين لضمان أقصى درجات الأمان على الطريق.',
      image: `${import.meta.env.BASE_URL}assets/gallery/gallery_3_brakes.jpg`,
      icon: Disc,
    },
    {
      title: 'فحص الجودة والتشطيب النهائي',
      category: 'معايير المصنع',
      description: 'فحص دقيق داخل نفق إضاءة متخصص للتأكد من خلو السيارة من أي ملاحظة وتسليمها بحالة الوكالة.',
      image: `${import.meta.env.BASE_URL}assets/gallery/gallery_4_inspection.jpg`,
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="gallery" className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#070404] via-[#0d0707] to-[#070404] border-t border-white/5 select-none">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 font-cairo">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0}>
            <div className="text-[#ff3535] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 font-mono">
              معرض العمل والاحترافية
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-5 leading-tight">
              هندسة دقيقة.. لأعلى درجات الأداء
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-[#9aa0a8] text-sm sm:text-base leading-relaxed">
              نظرة داخل مركز سيد جولف المتخصص؛ حيث تلتقي التكنولوجيا الألمانية الحديثة بأيدي مهندسين خبراء لتقديم عناية تليق بسيارتك.
            </p>
          </FadeUp>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={index * 100}>
                <div className="group relative bg-[#110909]/80 rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff3535]/60 transition-all duration-500 shadow-2xl hover:shadow-red-950/30 flex flex-col">
                  {/* Image Container with Zoom effect */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110909] via-transparent to-black/30" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-lg">
                      <Icon className="w-3.5 h-3.5 text-[#ff3535]" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#ff3535] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#9aa0a8] text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                      <span className="text-[#ff3535] font-mono font-bold tracking-wider">0{index + 1} // VAG SERVICE</span>
                      <span className="inline-block transform group-hover:-translate-x-1.5 transition-transform text-[#ff3535]">← تفاصيل الخدمة</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
