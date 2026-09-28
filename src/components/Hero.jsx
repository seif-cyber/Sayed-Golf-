import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden select-none"
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
        car-slot-1: Exact anchor for the Porsche on initial load.
        Positioned on the showroom floor right between the white Golf and red Seat Leon.
      */}
      <div
        id="car-slot-1"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none top-[69%] sm:top-[60%] md:top-[48%] w-[145vw] sm:w-[120vw] md:w-[min(760px,50vw)] h-[100px] sm:h-[150px] md:h-[min(380px,26vw)]"
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
