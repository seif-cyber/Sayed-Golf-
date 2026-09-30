import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SiVolkswagen, SiAudi, SiSeat, SiSkoda, SiPorsche } from 'react-icons/si';
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-0 w-full h-screen flex flex-col items-center justify-between overflow-hidden select-none"
    >
      {/* Desktop Background - 100% visible, never cropped */}
      <div 
        className="absolute inset-0 hidden md:block bg-[length:100%_100%] bg-center bg-no-repeat -z-10" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/pics/background.jpg)` }}
      />
      {/* Mobile Background - 100% visible, never cropped */}
      <div 
        className="absolute inset-0 block md:hidden bg-[length:100%_100%] bg-center bg-no-repeat -z-10" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/pics/background-mobile.jpg)` }}
      />

      {/* 
        car-slot-1: Exact anchor for the Porsche on initial load.
        Positioned directly on the concrete/asphalt driveway with user-tuned coordinates.
        Includes a soft realistic ground contact shadow on the asphalt.
      */}
      <div
        id="car-slot-1"
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none top-[72%] left-[46%] w-[83vh] h-[30vh] md:top-[81.5%] md:left-[48%] md:w-[135vh] md:h-[48vh]"
      >
        {/* Realistic ground contact shadow on the asphalt */}
        <div 
          className="absolute -bottom-[2%] left-1/2 -translate-x-1/2 w-[74%] h-[26%] rounded-[100%] pointer-events-none opacity-90 blur-[10px] md:blur-[18px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 45%, transparent 75%)'
          }}
        />
      </div>

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
