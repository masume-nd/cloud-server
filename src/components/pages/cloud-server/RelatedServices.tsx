import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import LinkCard from './LinkCard';
import RowCard from './RowCard';

export default function RelatedServices() {
  return (
    <div className="space-y-8 p-6 container mx-auto">
      <h4 className="text-center text-2xl text-primary-foreground">سرویس‌های مرتبط</h4>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 justify-center items-center">
        <LinkCard text={'بازارچه ابری'} />
        <LinkCard text={'سرور ابری'} />
      </div>

      <Card className="bg-primary text-white p-4 flex items-center gap-4 rounded-2xl mb-14">
        {/* <Image src="/support-agent.png" alt="پشتیبان" className="w-20 h-20 rounded-full" /> */}
        <div className="flex-1 space-y-2">
          <div className="font-semibold">پشتیبان ابر فردوسی، همراهی همیشگی</div>
          <p className="text-sm">
            اگر برای انتخاب یا استفاده نیاز به مشاوره و راهنمایی دارید، همیشه
            آماده ارائه بهترین راهکارها به شما هستیم.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary">0513-8804247</Button>
            <Button variant="secondary">تیکت</Button>
            <Button variant="secondary">گفتگوی آنلاین</Button>
          </div>
        </div>
      </Card>

     
      <h4 className="text-center text-2xl  text-primary-foreground">آموزش‌های مرتبط</h4>

      <Card className="bg-primary text-white px-6 h-22 rounded-2xl">
        <div className="flex justify-between items-center">
          <p className="text-base">
            همه چیز درباره سرور ابری را در بلاگ ما بخوانید.
          </p>
          <Button variant="secondary">مطالعه مقالات</Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RowCard
          title="مقایسه تخصصی انواع سیستم عامل های سرور ابری"
          description="استفاده از سرور ابری یک راه حل هوشمندانه برای پیشبرد اهداف تجاری شماست..."
          img="/images/cloud.png"
        />
        <RowCard
          title="سرور ابری چیست"
          description="وجود آپ‌تایم ۲۴ ساعته در سرور ابری یا Cloud Server"
          img="/images/cloud.png"
        />
      </div>
    </div>
  );
}
