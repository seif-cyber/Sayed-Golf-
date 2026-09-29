import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-0 w-full h-screen flex flex-col items-center justify-between overflow-hidden select-none"
    >
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 hidden md:block bg-cover bg-center -z-10" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/pics/background.jpg)` }}
      />
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 block md:hidden bg-cover bg-center -z-10" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/pics/background-mobile.jpg)` }}
      />

      {/* 
        Illuminated Dealership Signboard Overlay 
        Positioned over the illuminated lightbox in both desktop and mobile backgrounds
      */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[27%] md:top-[22%] w-[58vw] sm:w-[50vw] md:w-[350px] lg:w-[420px] h-[12vh] sm:h-[13vh] md:h-[125px] lg:h-[145px] pointer-events-none flex flex-col items-center justify-center text-center p-2 z-10">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
          <span className="font-black text-[13px] sm:text-base md:text-xl lg:text-2xl tracking-wider text-neutral-900 font-sans uppercase drop-shadow-sm">
            SAYED GOLF
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3535]" />
          <span className="font-black text-[13px] sm:text-base md:text-xl lg:text-2xl text-neutral-900 font-cairo drop-shadow-sm">
            سيد جولف
          </span>
        </div>
        <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-neutral-800 tracking-wide font-cairo bg-black/5 px-2.5 py-0.5 rounded-full border border-black/10 backdrop-blur-[1px]">
          متخصصون في صيانة مجموعة فولكس فاجن (VW Group)
        </div>
        <div className="mt-1 flex items-center justify-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-extrabold text-neutral-700 tracking-widest uppercase">
          <span>VW</span>
          <span>•</span>
          <span>AUDI</span>
          <span>•</span>
          <span>SEAT</span>
          <span>•</span>
          <span>SKODA</span>
          <span>•</span>
          <span>PORSCHE</span>
        </div>
      </div>

      {/* 
        car-slot-1: Exact anchor for the Porsche on initial load.
        Positioned directly on the showroom floor right between the white Golf (left) and black Audi (right).
        Sized to exactly match the scale of the flanking cars.
      */}
      <div
        id="car-slot-1"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-[55%] sm:top-[56%] md:top-[63%] w-[44vw] sm:w-[36vw] md:w-[min(380px,25vw)] h-[100px] md:h-[140px]"
      />

      {/* Top spacer for navbar */}
      <div className="pt-24" />

      {/* Bottom subtle scroll indicator positioned cleanly at the very bottom */}
      <div className="relative z-0 pb-3 flex flex-col items-center text-white/70 hover:text-white transition-colors">
        <a
          href="#features"
          className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[11px] tracking-widest uppercase font-medium hover:border-[#ff3535]/50 transition-all"
        >
          <span>اكتشف المزيد</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#ff3535]" />
        </a>
      </div>
    </section>
  );
}
