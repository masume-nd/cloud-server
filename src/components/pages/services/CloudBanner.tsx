'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


export default function CloudBanner() {


  const router = useRouter()
  return (
    <section className="w-full bg-white py-12" >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-right">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">سرور ابری</h1>
            <span className="mb-2 mr-2 text-[#69778E]">(Cloud Server)</span>
            <span className="inline-block rounded-full bg-gradient-to-r from-[#9FF0E4] to-white  text-sm font-semibold">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#F1FCFB] to-white text-[#20B2AA] m-[1px]  px-4 py-1 text-sm font-semibold">
                ارزان و با کیفیت
              </span>
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-[#69778E] mb-2">
            خرید سرور ابری،{' '}
            <span className=" text-blue-700">آخرین انتخاب </span> و
            <span className=" text-blue-700 mr-1">بهترین تجربه‌ای </span> که از
            آن پشیمان نمی‌شوید!
          </h2>

          <p className="text-gray-700 leading-loose mb-6">
            برای سایت و اپلیکیشن خود، به دنبال سرعت، امنیت و هزینه بهتر هستید؟
            برترین کلود سرور ایران را با{' '}
            <span className="text-blue-700">
              اینترنت نامحدود و پایداری ۹۹٪، سیستم عامل‌های لینوکس و ویندوز،
              مقیاس پذیری منابع و پرداخت ساعتی(PAYG)
            </span>{' '}
            همچنین
            <span className="text-blue-700">
              نصب اتوماتیک وب سرور، کنترل پنل و اسکریپت‌ها
            </span>{' '}
            را در اختیارتان خواهیم گذاشت.
          </p>

          <p className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#20B2AA] to-[#4169E1] font-medium mb-4 ">
            ۱۰۰ هزار تومان اعتبار هدیه
          </p>

          <div className="flex flex-wrap items-center gap-4">
        
            <Button onClick={() => router.push('/services/cloud-server')} className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded">
              تست رایگان
            </Button>
       
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/images/cloud.png"
            alt="Cloud Server"
            width={600}
            height={400}
            className="w-full h-auto object-contain "
          />
          <Button
            variant="outline"
            className="rounded-full px-5 py-5 text-blue-600 border-blue-600 hover:bg-blue-50 absolute bottom-10 right-[40%]"
          >
            ▶ مشاهده ویدئو
          </Button>
        </div>
      </div>
    </section>
  );
}
