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

<img width="1920" height="1080" alt="Screenshot (28)" src="https://github.com/user-attachments/assets/428833d3-ea63-4184-9146-4a30e834f1e1" />
<img width="1920" height="1080" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/70e161bd-0282-44d5-a83e-031ca3d905c0" />
<img width="1920" height="1080" alt="Screenshot (30)" src="https://github.com/user-attachments/assets/e32588eb-d535-46ca-b407-bb685d88028a" />




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
