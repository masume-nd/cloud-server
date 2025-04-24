import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#4C6EF5] text-white text-sm pt-10 pb-6 px-4 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-right">
        <div className="space-y-2">
          <h3 className="text-green-300 font-bold">سرویس‌های رایانش ابری</h3>
          <ul className="space-y-1">
            <li>سرور GPU</li>
            <li>سرور پردازش</li>
            <li>محاسبات ابری</li>
            <li>سرور AI</li>
            <li>سرور ژوپیتر لب</li>
            <li>خرید سرور ابری</li>
            <li>خرید سرور VPS</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-green-300 font-bold">تخفیفات رایانش ابری</h3>
          <ul className="space-y-1">
            <li>تخفیف دانشجویان و اساتید</li>
            <li>تخفیف صنایع و شرکت‌ها</li>
            <li>تخفیف پروپوزال‌های علمی</li>
            <li>تخفیف شرکت‌های فناوری و اطلاعات</li>
            <li>تخفیف لبزنت</li>
            <li>تخفیف سند هوش مصنوعی</li>
            <li>پرداخت اقساطی</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-green-300 font-bold">راهکارهای ابری</h3>
          <ul className="space-y-1">
            <li>خدمات ابری دانشگاه‌ها</li>
            <li>خدمات ابری سازمان‌ها</li>
            <li>کلید API</li>
            <li>کولوکیشن</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-green-300 font-bold">ابر اتوماتیک</h3>
          <ul className="space-y-1">
            <li>بازارچه ابری</li>
            <li>نرم‌افزارهای محاسبات و پردازش ابری</li>
            <li>نرم‌افزارهای گرافیک ابری</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-green-300 font-bold">بیشتر</h3>
          <ul className="space-y-1">
            <li>تعرفه رایانش ابری</li>
            <li>سیاست و قوانین</li>
            <li>راهنمایی</li>
            <li>درباره و ارتباط با ما</li>
            <li>سوالات متداول</li>
            <li>مستندات فنی</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col gap-4 text-center md:text-right">
        <div className="space-y-1 gap-6 flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold">ابرفردوسی</span>
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="h-6"
              width={24}
              height={24}
            />
          </div>
          <div className="space-x-12 flex flex-col md:flex-row ">
            <p className="flex md:justify-end gap-2">
              <span className="font-bold">آدرس:</span> مشهد، دانشگاه فردوسی،
              مرکز تحقیقات پیشرفته
            </p>
            <p className="flex  md:justify-end gap-2">
              <span className="font-bold"> تلفن:</span> ۰۵۱۳-۸۸۰۴۲۴۶۸
            </p>
            <p className="flex md:justify-end gap-2">
              <span className="font-bold">ایمیل:</span> info@ferdowsi.cloud
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-white max-w-md">
            <p>
              ابر فردوسی، پیشگام در رایانش ابری، با زیرساخت‌های قدرتمند و
              فناوری‌های پیشرفته، امنیت و پایداری بی‌نظیری را برای شما به ارمغان
              می‌آورد.
            </p>
            <p>
              با پشتیبانی حرفه‌ای و همیشگی، در هر قدم از مسیر موفقیت همراهتان
              خواهیم بود.
            </p>
          </div>
      <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 gap-12">
        <div className="flex gap-2 mt-4 md:mt-0">
          <Image src="/images/enamad.png" className="h-8" alt="badge1"  width={24} height={24}/>
          <Image src="/images/enamad.png" className="h-8" alt="badge1"  width={24} height={24}/>
          <Image src="/images/enamad.png" className="h-8" alt="badge1"  width={24} height={24}/>
          <Image src="/images/enamad.png" className="h-8" alt="badge1"  width={24} height={24}/>
          
        </div>
        <div className="flex items-center justify-center gap-4 text-white">
          <Image src="/icons/telegram.svg" width={16} height={16} alt="" />
          <Image src="/icons/aparat.svg" width={16} height={16} alt="" />
          <Image src="/icons/whatsapp.svg" width={16} height={16} alt="" />
          <Image src="/icons/instagram.svg" width={16} height={16} alt="" />
          <Image src="/icons/youtube.svg" width={16} height={16} alt="" />
          <Image src="/icons/x.svg" width={16} height={16} alt="" />
        </div>
      </div>
        </div>
      </div>

    </footer>
  );
}
