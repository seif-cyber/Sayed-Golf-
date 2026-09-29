import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SiVolkswagen, SiAudi, SiSeat, SiSkoda, SiPorsche } from 'react-icons/si';

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
      */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[34%] md:top-[29%] w-[60vw] sm:w-[48vw] md:w-[380px] lg:w-[440px] pointer-events-none flex flex-col items-center justify-center text-center p-0.5 sm:p-1 z-10">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          {/* Arabic on the right (first in DOM since dir="rtl"), English on the left */}
          <span className="font-black text-[12px] sm:text-sm md:text-lg lg:text-xl text-[#111113] font-cairo drop-shadow-sm">
            سيد جولف
          </span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#ff3535] shadow-sm shadow-red-500/50" />
          <span className="font-black text-[12px] sm:text-sm md:text-lg lg:text-xl tracking-wider text-[#111113] font-sans uppercase drop-shadow-sm" dir="ltr">
            SAYED GOLF
          </span>
        </div>
        
        {/* Subtitle Pill */}
        <div className="text-[7.5px] sm:text-[9px] md:text-[10px] lg:text-[11.5px] font-bold text-[#1a1a20] tracking-tight font-cairo bg-black/5 px-2 sm:px-3 py-0.5 rounded-full border border-black/10 backdrop-blur-[1px] whitespace-nowrap">
          <span className="sm:hidden">متخصصون في صيانة مجموعة فولكس فاجن</span>
          <span className="hidden sm:inline">متخصصون في صيانة مجموعة فولكس فاجن (VW Group)</span>
        </div>
        
        {/* Brand Logos */}
        <div dir="ltr" className="mt-1 sm:mt-1.5 md:mt-2 flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1 text-[6.5px] sm:text-[7.5px] md:text-[8.5px] lg:text-[9.5px] font-black text-[#1e1e24] tracking-widest uppercase">
          <div className="flex items-center gap-0.5">
            <SiVolkswagen className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
            <span>VW</span>
          </div>
          <div className="flex items-center gap-0.5">
            <SiAudi className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
            <span>AUDI</span>
          </div>
          <div className="flex items-center gap-0.5">
            <SiSeat className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
            <span>SEAT</span>
          </div>
          <div className="flex items-center gap-0.5">
            <SiSkoda className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
            <span>SKODA</span>
          </div>
          <div className="flex items-center gap-0.5">
            <SiPorsche className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
            <span>PORSCHE</span>
          </div>
        </div>
      </div>

      {/* 
        car-slot-1: Exact anchor for the Porsche on initial load.
        Positioned directly on the showroom floor right between the white Golf (left) and black Audi (right).
        Sized to exactly match the scale of the flanking cars.
      */}
      <div
        id="car-slot-1"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-[60%] sm:top-[60%] md:top-[68%] w-[80vw] sm:w-[70vw] md:w-[min(1200px,85vw)] h-[160px] md:h-[280px]"
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
