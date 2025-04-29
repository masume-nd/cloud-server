import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import LinkCard from './LinkCard';
import RowCard from './RowCard';
import {
  CloudUpload,
  MessageSquare,
  Phone,
  Server,
  Ticket,
} from 'lucide-react';
import SimpleCard from './SimpleCard';
import Image from 'next/image';

export default function RelatedServices() {
  return (
    <div className="space-y-8 p-6 container mx-auto">
      <h4 className="text-center text-2xl text-primary-foreground">
        سرویس‌های مرتبط
      </h4>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 justify-center items-center">
        <LinkCard text={'بازارچه ابری'} icon={<CloudUpload />} />
        <LinkCard text={'سرور ابری'} icon={<Server />} />
      </div>

      <Card className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 rounded-2xl mb-14 bg-primary text-white p-4">
        <div className="items-center space-y-2">
          <p className="text-sm">
            اگر برای انتخاب یا استفاده نیاز به مشاوره و راهنمایی دارید، همیشه
            آماده ارائه بهترین راهکارها به شما هستیم.
          </p>
          <div className="flex gap-1 md:gap-2 text-xs">
            <Button className="text-xs p-0" variant="simple">
              <Phone color="#168B86" /> 0513-8804247
            </Button>
            <Button className="text-xs" variant="simple">
              <MessageSquare color="#168B86" /> گفتگوی آنلاین
            </Button>
            <Button className="text-xs" variant="simple">
              <Ticket color="#168B86" /> تیکت پشتیبانی
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full md:w-1/2 bg-white text-secondary rounded-2xl p-2 md:p-4 relative h-22">
          <div className='w-1/2'>
            <Image
              src="/images/Support.svg"
              alt="پشتیبان"
              className="absolute bottom-0 w-1/2 md:w-[211]"
              width="211"
              height="121"
            />
          </div>
          <p className='w-1/3 md:w-1/2 text-sm md:text-lg'>پشتیبان ابرفردوسی همراهی همیشگی</p>
        </div>
      </Card>

      <h4 className="text-center text-2xl  text-primary-foreground">
        آموزش‌های مرتبط
      </h4>

      <SimpleCard
        title=" همه چیز درباره سرور ابری را در بلاگ ما بخوانید."
        buttonText="مطالعه مقالات"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RowCard
          title="سرور ابری چیست"
          description=" وجود آپ‌تایم ۲۴ ساعته در سرور ابری یا صرفا یک ویژگی مطلوب نیست، بلکه یک نیاز اساسی برای دنیای به هم پیوستن استCloud Server "
          img="/images/article1.png"
        />
        <RowCard
          title="مقایسه تخصصی انواع سیستم عامل های سرور ابری"
          description="  استفاده از سرور ابری یک راه حل هوشمندانه برای پیشبرد اهداف تجاری شماست زیرا علاوه بر قیمت به صرفه، امنیت داده های شمارا تضمین میکند و "
          img="/images/article2.png"
        />
      </div>
    </div>
  );
}
