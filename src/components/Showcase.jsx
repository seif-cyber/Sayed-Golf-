import React from 'react';
import FadeUp from './FadeUp';
import Counter from './Counter';

export default function Showcase() {
  return (
    <section id="showcase" className="relative min-h-[150vh] lg:min-h-screen flex items-center py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Side slot for the car (Sticky background on mobile) */}
        <div id="car-slot-3" className="order-first lg:order-none sticky top-[25vh] h-[50vh] -mb-[50vh] w-full pointer-events-none flex items-center justify-center lg:static lg:h-[560px] lg:-mb-0 z-0"></div>
        
        {/* Content */}
        <div className="flex flex-col relative z-20 mt-[50vh] lg:mt-0 bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:rounded-none">
          <FadeUp delay={0}>
          <div className="text-[#ff3535] text-sm font-bold tracking-[0.3em] uppercase mb-4 font-mono">جودة فائقة</div>
          <h2 className="text-white text-5xl sm:text-6xl md:text-[90px] font-black uppercase leading-[1.1] mb-6 font-cairo text-transparent bg-clip-text" style={{
            backgroundImage: "linear-gradient(180deg, #ff4b3a 0%, #c92f24 45%, #6e1610 82%, #430d09 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            أداء <br />متميز
          </h2>
          </FadeUp>
          <FadeUp delay={100}>
          <p className="text-[#b5bac1] text-base md:text-lg leading-relaxed max-w-[520px]">
            نلتزم بتقديم أفضل مستوى من الخدمة لسيارتك. بفضل مهندسينا الخبراء ومعداتنا المتطورة، نضمن عودة سيارتك إلى الطريق بأفضل حالة ممكنة، كأنها خرجت للتو من المصنع.
          </p>
          </FadeUp>
          
          <FadeUp delay={200}>
          <img src={`${import.meta.env.BASE_URL}assets/clean_images/reel_025_clean.jpg`} alt="Showcase Image" className="mt-8 w-full max-w-[520px] max-h-[260px] sm:max-h-[320px] object-cover rounded-xl shadow-2xl opacity-90 border border-[#ff3535]/20" />
          </FadeUp>

          <div className="h-[2px] mt-8 max-w-[520px]" style={{ background: 'linear-gradient(90deg, #ff4b3a 0%, rgba(255, 75, 58, 0.35) 45%, transparent 100%)' }}></div>
          
          <FadeUp delay={300}>
          <div className="grid grid-cols-3 gap-5 mt-7 max-w-[520px]">
            <div>
              <div className="text-[#9aa0a8] text-[11px] font-semibold tracking-wider uppercase mb-2">خبرة</div>
              <div className="text-[#ff3535] text-xl font-black uppercase font-mono">+15 عام</div>
            </div>
            <div>
              <div className="text-[#9aa0a8] text-[11px] font-semibold tracking-wider uppercase mb-2">عملاء</div>
              <div className="text-[#ff3535] text-xl font-black uppercase font-mono"><Counter end={5000} prefix="+" /></div>
            </div>
            <div>
              <div className="text-[#9aa0a8] text-[11px] font-semibold tracking-wider uppercase mb-2">رضا</div>
              <div className="text-[#ff3535] text-xl font-black uppercase font-mono"><Counter end={100} suffix="%" /></div>
            </div>
          </div>
          </FadeUp>
          
          <a href="tel:01003326060" className="mt-10 inline-flex items-center gap-3 text-white text-sm font-bold tracking-[0.16em] uppercase hover:text-[#ff3535] transition-colors w-fit group">
            <span className="text-base font-bold font-cairo text-[#ff3535] group-hover:text-white transition-colors">اتصل بنا</span>
            <span className="transform -scale-x-100 group-hover:-translate-x-2 transition-transform inline-block">{"->"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
