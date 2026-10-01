import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Instagram, Facebook, Navigation } from 'lucide-react';
import FadeUp from './FadeUp';

const BRANCHES = [
  {
    id: 'nozha',
    badge: 'الفرع الرئيسي',
    isMain: true,
    region: 'النزهة الجديدة / الهايكستب',
    name: 'فرع النزهة الجديدة (محور جوزيف تيتو)',
    address: 'شارع 10 العرايشية - الهايكستب - محور جوزيف تيتو، النزهة الجديدة، القاهرة (أمام محطة بنزين وطنية).',
    phone: '0100 3326060',
    phoneClean: '01003326060',
    mapUrl: 'https://maps.app.goo.gl/vvj13a2jC58SYSpx9',
    whatsappUrl: `https://wa.me/201003326060?text=${encodeURIComponent('مرحباً، أريد الاستفسار وحجز موعد في فرع النزهة الجديدة')}`,
    delay: 150,
  },
  {
    id: 'suez',
    badge: 'فرع طريق السويس',
    isMain: false,
    region: 'شرق القاهرة / مدينتي',
    name: 'فرع طريق السويس (كارتة مدينتي)',
    address: 'طريق السويس - أمام كارتة مدينتي مباشرة وسوق السيارات الجديد، القاهرة.',
    phone: '0102 444 7800',
    phoneClean: '01024447800',
    mapUrl: 'https://maps.app.goo.gl/pH74i3Qv5FaH1xeTA',
    whatsappUrl: `https://wa.me/201024447800?text=${encodeURIComponent('مرحباً، أريد الاستفسار وحجز موعد في فرع طريق السويس')}`,
    delay: 250,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <FadeUp>
          <div className="contact-header text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-vw-red/10 border border-vw-red/30 text-vw-red text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4 text-vw-red" />
              <span>فروعنا وخدمة العملاء</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              فروع مركز <span className="text-vw-red">سيد جولف</span> ومعلومات التواصل
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              يسعدنا استقبالكم في فرعينا بالقاهرة لتشخيص وصيانة سياراتكم بأعلى كفاءة وسرعة.
            </p>
          </div>
        </FadeUp>

        {/* Working Hours Bar */}
        <FadeUp delay={100}>
          <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-center gap-3 text-sm text-gray-300">
            <Clock className="w-5 h-5 text-vw-red shrink-0" />
            <span>
              <strong className="text-white">مواعيد العمل:</strong> يومياً من الساعة <strong className="text-vw-red font-mono">10:00 صباحاً</strong> حتى <strong className="text-vw-red font-mono">10:00 مساءً</strong> (ما عدا يوم الأحد عطلة أسبوعية).
            </span>
          </div>
        </FadeUp>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {BRANCHES.map((branch) => (
            <FadeUp key={branch.id} delay={branch.delay}>
              <div className="branch-box h-full p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vw-red/10 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold ${
                        branch.isMain
                          ? 'bg-vw-red text-white'
                          : 'bg-vw-gray text-vw-silver border border-white/10'
                      }`}
                    >
                      <span>{branch.badge}</span>
                    </div>
                    <span className="text-xs text-vw-silver">{branch.region}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                    {branch.name}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <MapPin className="w-5 h-5 text-vw-red shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Phone className="w-5 h-5 text-vw-red shrink-0" />
                      <a
                        href={`tel:${branch.phoneClean}`}
                        dir="ltr"
                        className="hover:text-vw-red font-mono font-bold transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions: Google Maps, WhatsApp, Call Us */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  {/* Google Maps Directions */}
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-vw-gray hover:bg-vw-lightgray text-white text-xs sm:text-sm font-bold border border-white/10 hover:border-vw-red/40 transition-all duration-200 group"
                  >
                    <Navigation className="w-4 h-4 text-vw-red group-hover:scale-110 transition-transform" />
                    <span>الاتجاهات على خرائط جوجل</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>

                  {/* WhatsApp and Call Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={branch.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white text-xs sm:text-sm font-bold border border-[#25D366]/30 transition-all duration-200 group"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                      <span>تواصل واتساب</span>
                    </a>

                    <a
                      href={`tel:${branch.phoneClean}`}
                      className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-vw-red hover:bg-vw-redHover text-white text-xs sm:text-sm font-bold shadow-lg shadow-vw-red/30 transition-all duration-200 group"
                    >
                      <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>اتصل بنا</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Social and Quick Reach Bar */}
        <FadeUp delay={300}>
          <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <h4 className="text-lg font-bold text-white mb-1">تابع أعمالنا ويوميات الورشة</h4>
              <p className="text-xs text-gray-400">فيديوهات حصرية لصيانة المحركات والفتيس وعمليات الإصلاح المعقدة</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/sayed.golf/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>@sayed.golf</span>
              </a>

              <a
                href="https://www.facebook.com/SayedGolf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>SayedGolf</span>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
