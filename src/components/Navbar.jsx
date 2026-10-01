import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'الخدمات', href: '#features' },
    { name: 'الجودة', href: '#showcase' },
    { name: 'المعرض', href: '#gallery' },
    { name: 'احجز الآن', href: '#finale' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-cairo ${
        isScrolled
          ? 'bg-[#070404]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Right Group: Logo & Navigation Links together */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo & Brand Name */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="flex flex-col text-right">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-[#ff3535] transition-colors duration-200 drop-shadow-md">
                  SAYED GOLF
                </span>
                <span className="text-[10px] sm:text-xs text-gray-300 font-bold tracking-widest uppercase drop-shadow-sm">
                  مركز صيانة بورش
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Aligned right next to the logo */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 rounded-full text-xs lg:text-sm font-bold text-white/90 hover:text-white bg-black/35 hover:bg-[#ff3535]/80 border border-white/15 hover:border-transparent transition-all duration-200 backdrop-blur-md shadow-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Left Group: Direct CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:01003326060"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#ff3535] hover:bg-[#e02b2b] text-white text-sm font-bold transition-all duration-200 tracking-wider hover:-translate-y-px shadow-lg shadow-red-950/50"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="tracking-widest font-bold">اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 p-3 rounded-lg bg-[#4d0f0f] border border-[#ff5050]/35 transition-colors hover:bg-[#6b1515]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ffe9e9]" /> : <Menu className="w-5 h-5 text-[#ffe9e9]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 backdrop-blur-2xl border-b border-white/15 px-6 pt-6 pb-8 flex flex-col items-center gap-3.5 shadow-2xl z-[120]"
          style={{ backgroundColor: 'rgba(11, 12, 16, 0.98)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl text-base font-bold text-white hover:text-white bg-white/5 hover:bg-[#ff3535] active:bg-[#ff3535]/80 transition-all border border-white/10 hover:border-transparent tracking-wider font-cairo shadow-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:01003326060"
            className="mt-2 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ff3535] hover:bg-[#e02b2b] text-white font-bold tracking-wider uppercase w-full max-w-xs shadow-lg shadow-red-950/60 active:scale-95 transition-all text-base"
          >
            <Phone className="w-5 h-5 text-white" />
            <span className="font-bold">اتصل بنا</span>
          </a>
        </div>
      )}
    </header>
  );
}
