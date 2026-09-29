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
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[34%] md:top-[29%] w-[38vh] md:w-[440px] lg:w-[500px] pointer-events-none flex flex-col items-center justify-center text-center p-[0.5vh] md:p-1.5 z-10">
        <div className="flex items-center justify-center gap-[0.8vh] md:gap-2.5 mb-[0.8vh] md:mb-1.5">
          {/* Arabic on the right (first in DOM since dir="rtl"), English on the left */}
          <span className="font-black text-[2vh] md:text-xl lg:text-2xl text-[#111113] font-cairo drop-shadow-sm">
            سيد جولف
          </span>
          <span className="w-[0.8vh] h-[0.8vh] md:w-2 md:h-2 rounded-full bg-[#ff3535] shadow-sm shadow-red-500/50" />
          <span className="font-black text-[2vh] md:text-xl lg:text-2xl tracking-wider text-[#111113] font-sans uppercase drop-shadow-sm" dir="ltr">
            SAYED GOLF
          </span>
        </div>
        
        {/* Subtitle Pill */}
        <div className="text-[1vh] md:text-xs lg:text-[13px] font-bold text-[#1a1a20] tracking-tight font-cairo bg-black/5 px-[1.2vh] md:px-3.5 py-[0.2vh] md:py-0.5 rounded-full border border-black/10 backdrop-blur-[1px] whitespace-nowrap">
          <span>متخصصون في صيانة مجموعة فولكس فاجن (VW Group)</span>
        </div>
        
        {/* Brand Logos */}
        <div dir="ltr" className="mt-[1.2vh] md:mt-2.5 flex flex-wrap items-center justify-center gap-x-[1vh] md:gap-x-3.5 gap-y-[0.5vh] md:gap-y-1 text-[0.85vh] md:text-[10px] lg:text-[11px] font-black text-[#1e1e24] tracking-widest uppercase">
          <div className="flex items-center gap-[0.3vh] md:gap-1">
            <SiVolkswagen className="w-[1.4vh] h-[1.4vh] md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>VW</span>
          </div>
          <div className="flex items-center gap-[0.3vh] md:gap-1">
            <SiAudi className="w-[1.4vh] h-[1.4vh] md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>AUDI</span>
          </div>
          <div className="flex items-center gap-[0.3vh] md:gap-1">
            <SiSeat className="w-[1.4vh] h-[1.4vh] md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>SEAT</span>
          </div>
          <div className="flex items-center gap-[0.3vh] md:gap-1">
            <SiSkoda className="w-[1.4vh] h-[1.4vh] md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            <span>SKODA</span>
          </div>
          <div className="flex items-center gap-[0.3vh] md:gap-1">
            <SiPorsche className="w-[1.4vh] h-[1.4vh] md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
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
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-[63%] md:top-[68%] w-[50vh] md:w-[min(1200px,85vw)] h-[20vh] md:h-[280px]"
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
