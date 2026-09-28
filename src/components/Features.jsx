import React from 'react';
import FadeUp from './FadeUp';

export default function Features() {
  return (
    <section id="features" className="relative min-h-[150vh] lg:min-h-screen flex items-center py-24 px-6 md:px-12 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(150,25,20,0.12)_0%,transparent_70%)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,420px)_1fr] gap-12 lg:gap-14 items-center max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Right Column (since RTL, this is technically the logical left/first column) */}
        <div className="flex flex-col gap-16 lg:text-left text-right lg:order-1 relative z-20 mt-[50vh] lg:mt-0">
          <FadeUp>
<div className="relative pt-6 border-t-2 border-transparent bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:rounded-none" style={{ borderImage: 'linear-gradient(90deg, #ff4b3a 0%, rgba(255, 75, 58, 0.35) 45%, transparent 100%) 1' }}>
            <div className="text-[#ff3535] text-xs md:text-sm font-bold tracking-[0.2em] mb-2 font-mono">01</div>
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider font-cairo mb-3">فحص شامل بالكمبيوتر</h3>
            <p className="text-[#9aa0a8] text-sm md:text-base leading-relaxed max-w-[340px]">
              نستخدم أحدث أجهزة الفحص الأصلية VAG ODIS لضمان دقة التشخيص وتحديد الأعطال بدقة متناهية لسيارات مجموعة فولكس فاجن.
            </p>
            <img src="/assets/clean_images/reel_021_clean.jpg" alt="Service 1" className="mt-4 w-full max-w-[320px] max-h-[200px] sm:max-h-[240px] object-cover rounded-lg shadow-lg opacity-85" />
          </div>
          </FadeUp>
          
          <FadeUp>
<div className="relative pt-6 border-t-2 border-transparent bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:rounded-none" style={{ borderImage: 'linear-gradient(90deg, #ff4b3a 0%, rgba(255, 75, 58, 0.35) 45%, transparent 100%) 1' }}>
            <div className="text-[#ff3535] text-xs md:text-sm font-bold tracking-[0.2em] mb-2 font-mono">02</div>
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider font-cairo mb-3">صيانة المحركات</h3>
            <p className="text-[#9aa0a8] text-sm md:text-base leading-relaxed max-w-[340px]">
              عمرات كاملة وصيانة دورية لجميع محركات بورش، أودي، وفولكس فاجن بأيدي خبراء متخصصين.
            </p>
            <img src="/assets/clean_images/reel_022_clean.jpg" alt="Service 2" className="mt-4 w-full max-w-[320px] max-h-[200px] sm:max-h-[240px] object-cover rounded-lg shadow-lg opacity-85" />
          </div>
          </FadeUp>
        </div>

        {/* Center slot for the Car (Sticky background on mobile, middle column on desktop) */}
        <div id="car-slot-2" className="order-first lg:order-2 sticky top-[20vh] h-[60vh] -mb-[60vh] w-full pointer-events-none flex items-center justify-center lg:static lg:h-[600px] lg:-mb-0 z-0"></div>

        {/* Left Column (Logical right in RTL) */}
        <div className="flex flex-col gap-16 text-right lg:text-right lg:order-3 relative z-20">
          <FadeUp>
<div className="relative pt-6 border-t-2 border-transparent bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:rounded-none" style={{ borderImage: 'linear-gradient(270deg, #ff4b3a 0%, rgba(255, 75, 58, 0.35) 45%, transparent 100%) 1' }}>
            <div className="text-[#ff3535] text-xs md:text-sm font-bold tracking-[0.2em] mb-2 font-mono">03</div>
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider font-cairo mb-3">تحديث وبرمجة</h3>
            <p className="text-[#9aa0a8] text-sm md:text-base leading-relaxed max-w-[340px] mr-auto lg:mr-0 lg:ml-auto">
              برمجة وحدات التحكم الأونلاين (Online Coding) وتحديث السوفت وير لجميع أنظمة السيارة لتواكب أحدث الإصدارات.
            </p>
            <img src="/assets/clean_images/reel_023_clean.jpg" alt="Service 3" className="mt-4 w-full max-w-[320px] max-h-[200px] sm:max-h-[240px] object-cover rounded-lg shadow-lg opacity-85 mr-auto lg:mr-0 lg:ml-auto" />
          </div>
          </FadeUp>

          <FadeUp>
<div className="relative pt-6 border-t-2 border-transparent bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:rounded-none" style={{ borderImage: 'linear-gradient(270deg, #ff4b3a 0%, rgba(255, 75, 58, 0.35) 45%, transparent 100%) 1' }}>
            <div className="text-[#ff3535] text-xs md:text-sm font-bold tracking-[0.2em] mb-2 font-mono">04</div>
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider font-cairo mb-3">قطع غيار أصلية</h3>
            <p className="text-[#9aa0a8] text-sm md:text-base leading-relaxed max-w-[340px] mr-auto lg:mr-0 lg:ml-auto">
              نوفر جميع قطع الغيار الأصلية المعتمدة لضمان أداء يدوم طويلاً وراحة بال كاملة في كل رحلة.
            </p>
            <img src="/assets/clean_images/reel_024_clean.jpg" alt="Service 4" className="mt-4 w-full max-w-[320px] max-h-[200px] sm:max-h-[240px] object-cover rounded-lg shadow-lg opacity-85 mr-auto lg:mr-0 lg:ml-auto" />
          </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
