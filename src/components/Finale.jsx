import React from 'react';
import { Phone } from 'lucide-react';

export default function Finale() {
  return (
    <section id="finale" className="relative min-h-[100vh] flex flex-col items-center justify-start pt-28 pb-16 px-6 overflow-hidden text-center bg-[radial-gradient(ellipse_55%_50%_at_50%_102%,rgba(210,45,30,0.25)_0%,rgba(120,20,15,0.1)_55%,transparent_75%)]">
      
      <div className="text-[#ff3535] text-sm font-bold tracking-[0.3em] uppercase mb-4 relative z-10 font-mono">استعد للإنطلاق</div>
      
      <h2 className="font-black text-[22vw] leading-[0.95] tracking-[0.02em] uppercase whitespace-nowrap text-transparent bg-clip-text relative z-10" style={{
        fontFamily: "Impact, 'Arial Black', sans-serif",
        backgroundImage: "linear-gradient(180deg, #ff4b3a 0%, #c92f24 45%, #6e1610 82%, #430d09 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        احجز الآن
      </h2>
      
      {/* Slot for the car to overlap the bottom of the title */}
      <div id="car-slot-4" className="relative w-[88vw] max-w-[680px] h-[340px] sm:h-[440px] md:h-[530px] -mt-[60px] sm:-mt-[120px] md:-mt-[190px] mx-auto z-20 pointer-events-none"></div>

      {/* Direct Call to Action Button */}
      <div className="relative z-30 mt-4 sm:mt-6">
        <a
          href="tel:01003326060"
          className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#ff3535] hover:bg-[#e62e2e] text-white font-bold hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Phone className="w-5 h-5 animate-pulse text-white" />
          <span className="text-base sm:text-lg font-bold font-cairo tracking-wide">اتصل بنا</span>
        </a>
      </div>

    </section>
  );
}
