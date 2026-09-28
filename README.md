# مركز سيد جولف (Sayed Golf) - الموقع الإلكتروني الرسمي 🏎️🇩🇪

موقع إلكتروني تفاعلي متقدم لمركز **سيد جولف** (Sayed Golf) المتخصص في صيانة وبرمجة سيارات مجموعة فولكس فاجن الألمانية (VW, Audi, SEAT, Škoda, Porsche, Cupra).

الموقع مبني بالكامل بتقنية **3D Scrollytelling**، حيث يتم عرض مجسم سيارة بورش ثلاثي الأبعاد يدور ويتفاعل بدقة وسلاسة مع تمرير المستخدم (Scroll).

---

## 🚀 المميزات التقنية (Key Features)

- **3D Scrollytelling تفاعلي:** دوران بزوايا متعددة (Showroom Style) وعرض ثلاثي الأبعاد متزامن مع أقسام الموقع باستخدام **Three.js** و **React Three Fiber** و **GSAP ScrollTrigger**.
- **تصميم ألماني فاخر (VW Identity):** ألوان وهوية مجموعة فولكس فاجن (أسود داكن، رمادي، أحمر رياضي، وأبيض).
- **دعم كامل للغة العربية (RTL):** تخطيط متناسق من اليمين لليسار باستخدام خط **Cairo** الحديث.
- **تكامل صور المركز الحقيقية:** دمج صور الفحص والصيانة من المركز داخل كروت الخدمات.
- **حجز واتصال فوري:** أزرار اتصال مباشر وحجز مواعيد عبر WhatsApp مبرمجة لفرعي النزهة الجديدة وطريق السويس.
- **نشر تلقائي عبر GitHub Actions:** جاهز للرفع المباشر والاستضافة المجانية على **GitHub Pages**.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

- **React 18** + **Vite**
- **Tailwind CSS** (التصميم والتنسيق المتجاوب)
- **Three.js** + **@react-three/fiber** + **@react-three/drei** (بيئة الـ 3D والظلال الواقعية)
- **GSAP (GreenSock)** + **ScrollTrigger** (محرك الحركات وسيناريو التمرير)
- **Lucide React** (الأيقونات التفاعلية)

---

## 💻 التشغيل المحلي (Local Development)

لتشغيل المشروع على جهازك:

```bash
# 1. الدخول لمجلد المشروع
cd "E:\Project's\sayed golf\sayed-golf-website"

# 2. تثبيت الحزم والمكتبات
npm install

# 3. تشغيل سيرفر التطوير المحلي
npm run dev
```

سيفتح الموقع على الرابط: `http://localhost:5173`

---

## 🌐 خطوات الرفع على GitHub والنشر التلقائي على GitHub Pages

المشروع مهيأ مسبقاً للعمل مع **GitHub Actions** والنشر على **GitHub Pages** بخطوات بسيطة:

### الخطوة 1: إنشاء مستودع جديد على GitHub
1. ادخل على حسابك في [GitHub](https://github.com/new).
2. أنشئ مستودعاً جديداً (New Repository) وليكن اسمه: `sayed-golf` أو `sayed-golf-website`.
3. اتركه فارغاً بدون إضافة README أو .gitignore (لأنها مجهزة بالفعل هنا).

### الخطوة 2: ربط ورفع الكود عبر التيرمينال
افتح موجه الأوامر في مجلد `sayed-golf-website` ونفذ الأوامر التالية:

```bash
git init
git add .
git commit -m "feat: initial commit for Sayed Golf 3D website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
*(استبدل `YOUR_USERNAME` باسم حسابك على GitHub، و `YOUR_REPOSITORY` باسم المستودع).*

### الخطوة 3: تفعيل GitHub Pages
1. ادخل على صفحة المستودع على GitHub.
2. اذهب إلى **Settings** -> **Pages**.
3. تحت **Build and deployment**، اختر في خانة **Source**:
   👉 **GitHub Actions**
4. بمجرد اختيارها، سيبدأ الـ Action المرفق (`.github/workflows/deploy.yml`) بالعمل تلقائياً، وخلال دقيقة واحدة سيكون موقعك متاحاً أونلاين على الرابط:
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

---

## 📁 هيكل المجلدات (File Structure)

```text
sayed-golf-website/
├── .github/workflows/deploy.yml # خط أنابيب النشر التلقائي لـ GitHub Pages
├── public/
│   ├── images/                  # الشعار وصور خدمات المركز
│   └── models/porsche.glb       # مجسم السيارة ثلاثي الأبعاد
├── src/
│   ├── components/
│   │   ├── Canvas3D.jsx         # كانفاس الـ 3D وربط الحركة مع السكرول عبر GSAP
│   │   ├── Navbar.jsx           # القائمة العلوية وأزرار الاتصال السريع
│   │   ├── Hero.jsx             # الواجهة الترحيبية
│   │   ├── AboutUs.jsx          # نبذة عن المركز والصرح الهندسي
│   │   ├── Services.jsx         # كروت الخدمات المتحركة بالصور
│   │   ├── Brands.jsx           # الماركات المدعومة (VW, Audi, Seat, ...)
│   │   ├── WhyUs.jsx            # مميزات سيد جولف والضمان
│   │   ├── Contact.jsx          # الفروع (النزهة وسوق السيارات) ومواعيد العمل
│   │   └── Footer.jsx           # التذييل وحقوق المركز
│   ├── App.jsx                  # تجميع المكونات
│   ├── index.css                # التنسيقات العامة وخط Cairo
│   └── main.jsx                 # نقطة البداية
├── index.html                   # القالب العام وتفعيل RTL
├── tailwind.config.js           # إعدادات ألوان وهوية VW
├── vite.config.js               # ضبط المسار النسبي base: './'
└── package.json                 # التبعيات وأوامر التشغيل
```

---
**صُمم بكل فخر لصالح مركز سيد جولف لصيانة السيارات الألمانية 🇩🇪**
