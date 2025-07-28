# Movie Search App

تطبيق بسيط للبحث عن الأفلام باستخدام [OMDb API](https://www.omdbapi.com/) مبني باستخدام **Next.js 14**, **TypeScript**, و **Tailwind CSS**.

 ميزات التطبيق

- البحث عن الأفلام حسب الاسم.
- عرض قائمة نتائج البحث مع صور وتفاصيل مختصرة.
- صفحة تفاصيل لكل فيلم تعرض:
  - الاسم
  - سنة الإنتاج
  - النوع
  - المخرج
  - الممثلين
  - القصة
- تصميم متجاوب وجذاب باستخدام Tailwind CSS.
- التعامل مع الأخطاء مثل:
  - البحث الفارغ.
  - عدم وجود نتائج.
  - خطأ في جلب البيانات.
  - صفحة 404 مخصصة عند عدم وجود الفيلم.

صور من التطبيق
<img width="1920" height="1080" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/ca66ab45-1956-4ff7-9bcb-50cea271a05e" />
<img width="1920" height="1080" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/848f23d1-c835-4074-ba73-b7d19d68aee0" />



الصفحة الرئيسية (البحث)
![Home Page](./public/screenshots/home.png)

صفحة تفاصيل الفيلم
![Movie Details](./public/screenshots/details.png)

نتائج بحث خاطئة
![No Results](./public/screenshots/no-results.png)

 صفحة 404
![Not Found](./public/screenshots/404.png)

## 🧪
| التقنية       | الاستخدام              |
|---------------|-------------------------|
| Next.js 14    | بناء صفحات الـ SSR & Routing |
| TypeScript    | كتابة كود قوي وآمن من الأخطاء |
| Tailwind CSS  | تصميم واجهات سريعة ومتجاوبة |
| OMDb API      | جلب بيانات الأفلام         |

 طريقة التشغيل

```bash
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
npm install
npm run dev
