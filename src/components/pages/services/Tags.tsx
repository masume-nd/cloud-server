'use client';

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
    <div className=" container mx-auto flex justify-around py-2 border border-blue-300 rounded-full text-blue-600 text-sm font-medium ">
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
  );
}
