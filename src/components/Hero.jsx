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
        className="absolute inset-0 hidden md:block bg-cover bg-bottom -z-10" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/pics/background.jpg)` }}
      />
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 block md:hidden bg-cover bg-bottom -z-10" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/pics/background-mobile.jpg)` }}
      />

      {/* 
        car-slot-1: Exact anchor for the Porsche on initial load.
        Positioned directly on the concrete/asphalt driveway right between the black VW (left) and red VW (right).
        Sized to match the real cars in the photo.
      */}
      <div
        id="car-slot-1"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-[84%] sm:top-[85%] md:top-[87%] w-[55vh] md:w-[min(950px,68vw)] h-[160px] md:h-[240px]"
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
