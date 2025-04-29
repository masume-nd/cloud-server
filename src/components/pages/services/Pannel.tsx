'use client';

import React, { useEffect, useState } from 'react';
import SimpleCard from '../cloud-server/SimpleCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Pannel = () => {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    console.log(`images/finance${activeImage}.png`);
  }, [activeImage]);
  return (
    <div className="container mx-auto my-16 space-y-8 p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <h3 className="text-2xl font-medium inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#20B2AA] to-[#4169E1]  mb-4">
            پنل سرور ابری، برای آسان‌ترین مدیریت ابر سرور
          </h3>
          <div className="flex flex-row md:flex-col md:w-1/2 gap-4 p-4 overflow-x-auto whitespace-nowrap scrollbar-hidden">
            <Button
              variant={activeImage === 0 ? 'royal_blue' : 'disabled'}
              onClick={() => {
                setActiveImage(0);
              }}
            >
              گروه های امنیتی و تنظیم پروژه ها
            </Button>
            <Button
              variant={activeImage === 1 ? 'royal_blue' : 'disabled'}
              onClick={() => {
                setActiveImage(1);
              }}
            >
              بخش مالی شفاف
            </Button>
            <Button
              variant={activeImage === 2 ? 'royal_blue' : 'disabled'}
              onClick={() => {
                setActiveImage(2);
              }}
            >
              مانیتورینگ لحظه ای منابع
            </Button>
          </div>
        </div>

        <Image
          src={`/images/finance${activeImage}.png`}
          width="500"
          height="500"
          alt="sdf"
        />
      </div>

      <SimpleCard
        title="برای کسب تجربه‌ای سریع و پایدار، سرورهای ابر فردوسی را امتحان کنید."
        buttonText="دریافت سرور"
      />
    </div>
  );
};

export default Pannel;
