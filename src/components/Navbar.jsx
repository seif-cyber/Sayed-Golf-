import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Wrench } from 'lucide-react';

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
    { name: 'عن المركز', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'الماركات', href: '#brands' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'الفروع والتواصل', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vw-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-vw-red/40 group-hover:border-vw-red transition-all duration-300 p-0.5 bg-black">
              <img
                src="./images/logo.jpg"
                alt="Sayed Golf Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-vw-red transition-colors duration-200">
                سيد جولف <span className="text-vw-red text-sm font-bold tracking-normal font-sans">SAYED GOLF</span>
              </span>
              <span className="text-xs text-vw-silver">صيانة سيارات مجموعة فولكس فاجن</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-vw-red transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-vw-red hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:01003326060"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-vw-gray hover:bg-vw-lightgray text-white text-sm font-bold border border-white/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-vw-red" />
              <span>0100 3326060</span>
            </a>
            <a
              href="https://wa.me/201003326060"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-vw-red hover:bg-vw-redHover text-white text-sm font-bold shadow-lg shadow-vw-red/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>احجز واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-vw-gray text-white hover:text-vw-red focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-vw-black/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:text-white hover:bg-vw-gray/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:01003326060"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-vw-gray text-white font-bold"
            >
              <Phone className="w-4 h-4 text-vw-red" />
              <span>0100 3326060</span>
            </a>
            <a
              href="https://wa.me/201003326060"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-vw-red text-white font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>احجز عبر واتساب</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
