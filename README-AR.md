# معركة المهارات الرقمية 3D – الصف السادس

هذا المشروع يغلّف ملف HTML المرفق كما هو من حيث الأسئلة والتصميم، مع تجهيز التشغيل دون إنترنت.

- ملف اللعبة: `www/index.html`
- مكتبة Three.js تُنسخ محليًا أثناء البناء إلى `www/vendor/three.min.js`.
- أيقونة Android المصدرية: `assets/icon.png`
- البناء: GitHub Actions → Build Android APK - Grade 6

لا ترفع مجلد `node_modules` أو `android`؛ يتم تثبيت الحزم وإنشاء مشروع Android تلقائيًا أثناء البناء.
