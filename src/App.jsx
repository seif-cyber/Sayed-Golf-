import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CanvasSequence from './components/CanvasSequence';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopProgress from './components/ScrollToTopProgress';
import { MessageCircle } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070404] text-white selection:bg-vw-red selection:text-white" dir="rtl">
      {/* Floating Header */}
      <Navbar />

      {/* Scrollytelling Container */}
      <main id="scrolly-container" className="relative overflow-x-clip font-cairo">
        {/* Fixed HTML5 Canvas Image Sequence */}
        <CanvasSequence />
        
        <Hero />
        <Features />
        <Showcase />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top with Circular Progress */}
      <ScrollToTopProgress />

      {/* WhatsApp Action */}
      <a
        href="https://wa.me/201003326060?text=مرحباً أريد الإستفسار عن خدمات سيد جولف"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline">
          تواصل معنا واتساب
        </span>
      </a>
    </div>
  );
}
