import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Crosshair, Users, FileText, Clock, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);

  const reasons = [
    {
      icon: Crosshair,
      title: 'دقة الفحص والتشخيص الفوري',
      desc: 'نحدد بدقة متناهية سبب العطل الجذري من أول مرة عبر أحدث أجهزة الفحص المعتمدة، لتوفير وقتك وتجنيبك تكاليف قطع الغيار العشوائية.',
    },
    {
      icon: ShieldCheck,
      title: 'قطع غيار أصلية ومضمونة',
      desc: 'نلتزم حصراً بتوفير قطع غيار أصلية وسوائل مطابقة للمواصفات الألمانية المعتمدة من Bosch و Mann-Filter و DAYCO مع ضمان حقيقي.',
    },
    {
      icon: Users,
      title: 'فريق هندسي متخصص',
      desc: 'مهندسون وفنيون مدربون ومتمرسون في تقنيات سيارات مجموعة فولكس فاجن ونواقل الحركة DSG ومحركات التيربو المعقدة.',
    },
    {
      icon: FileText,
      title: 'شفافية كاملة وتقارير فنية',
      desc: 'فواتير تفصيلية واضحة بدون أي بنود مبهمة، مع شرح فني دقيق لكل خطوة يتم إجراؤها على سيارتك قبل البدء بالعمل.',
    },
    {
      icon: Clock,
      title: 'سرعة ودقة في مواعيد التسليم',
      desc: 'جدول زمني صارم ومواعيد تسليم منضبطة تضمن عودة سيارتك إلى الطريق بأعلى معايير الأمان وبأسرع وقت ممكن.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.whyus-header', {
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

      gsap.from('.whyus-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="whyus-header text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-vw-red" />
            <span>ثقة وريادة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            لماذا يختار عملاؤنا مركز <span className="text-vw-red">سيد جولف</span>؟
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            نحن ندرك قيمة سيارتك الألمانية ونوفر لها رعاية هندسية استثنائية ترتكز على الصدق، الدقة، والأداء العالي.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="whyus-card p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-vw-red/15 border border-vw-red/40 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-vw-red" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {r.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-vw-silver">
                  <span>ميزة قياسية</span>
                  <span className="font-mono text-vw-red font-bold">0{idx + 1}</span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Box within grid */}
          <div className="whyus-card p-8 rounded-2xl bg-gradient-to-br from-vw-red/30 via-vw-dark to-vw-black border border-vw-red/50 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-bold text-vw-red uppercase tracking-wider block mb-2">
                جاهزون لخدمتك دائماً
              </span>
              <h3 className="text-2xl font-black text-white mb-3">
                هل تود استشارة مهندس حول عطل في سيارتك؟
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                تواصل مع الفريق الفني الآن عبر واتساب واحصل على إرشاد أولي فوري ومجاني.
              </p>
            </div>

            <a
              href="https://wa.me/201003326060?text=أرغب%20في%20استشارة%20فنية%20بخصوص%20سيارتي"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-vw-red hover:bg-vw-redHover text-white font-bold text-sm shadow-lg shadow-vw-red/40 transition-all duration-200"
            >
              <span>تحدث مع المهندس المختص</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
