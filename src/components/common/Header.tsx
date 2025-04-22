'use client';

// Components
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import CommonContainer from './Container';

// Icon
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b py-3 bg-white text-right">
      <CommonContainer>
        <div className="flex items-center gap-2">
          <span className="font-bold text-primary">ابرفردوسی</span>
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="h-6"
            width={24}
            height={24}
          />
        </div>

        <nav className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
          <Dropdown label="سرویس‌ها" />
          <Dropdown label="نرم‌افزارها" />
          <Dropdown label="تعرفه‌ها" />
          <Dropdown label="تخفیفات" />
          <Dropdown label="راهنمایی" />
          <Dropdown label="راهکارهای ابری" />
          <Dropdown label="بلاگ" />
          <span>...</span>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="light_green">051-38804347 📞</Button>
          <Button variant="royal_blue_outlined">ورود</Button>
          <Button variant="royal_blue">ثبت نام</Button>
        </div>
      </CommonContainer>
    </header>
  );
}

function Dropdown({ label }: { label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hover:text-primary">{label}</button>
      </DropdownMenuTrigger>
      <ChevronDown className="w-4 h-4" />
      <DropdownMenuContent align="end">
        <DropdownMenuItem>گزینه اول</DropdownMenuItem>
        <DropdownMenuItem>گزینه دوم</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
