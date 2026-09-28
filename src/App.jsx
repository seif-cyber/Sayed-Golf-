import React from 'react';
import Navbar from './components/Navbar';
import Canvas3D from './components/Canvas3D';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Brands from './components/Brands';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-vw-black text-white selection:bg-vw-red selection:text-white">
      {/* Fixed 3D Canvas Layer in Background */}
      <Canvas3D />

      {/* Floating Header */}
      <Navbar />

      {/* Scrollytelling Container */}
      <main id="scrolly-container" className="relative z-10">
        <Hero />
        <AboutUs />
        <Services />
        <Brands />
        <WhyUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/201003326060?text=مرحبا،%20أود%20الاستفسار%20عن%20صيانة%20سيارتي%20في%20مركز%20سيد%20جولف"
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
