'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

const links = [
  'قیمت',
  'مشخصات فنی',
  'چرایی استفاده',
  'مزایا',
  'افزونه‌ها',
  'مخاطبان',
  'کنترل پنل',
  'راهنمای دریافت',
  'سوالات متداول',
  'سرویس‌های مرتبط',
  'آموزش‌های مرتبط',
];

export default function TagMenu() {
  return (
    <>
      <div className="container mx-auto hidden md:flex justify-around py-2 border border-blue-300 rounded-full text-blue-600 text-sm font-medium ">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href="#"
            className="hover:text-blue-800 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="md:hidden mx-2 mb-8">
        <Select>
          <SelectTrigger
            dir="rtl"
            className="w-full border-primary text-secondary"
          >
            <SelectValue placeholder="راهنمای بخش‌ها" />
          </SelectTrigger>
          <SelectContent
            dir="rtl"
            className="rtl:text-right rtl:pl-4 border-primary"
          >
            <SelectGroup>
              <SelectLabel></SelectLabel>
              {links.map((item, idx) => (
                <SelectItem className="text-secondary" key={idx} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
