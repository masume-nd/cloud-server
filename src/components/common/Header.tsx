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
import { Menu, Phone } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import Link from 'next/link';

const links = [
  'سرویس‌ها',
  'نرم‌افزارها',
  'تعرفه‌ها',
  'تخفیفات',
  'راهنمایی',
  'راهکارهای ابری',
  'بلاگ',
];
export default function Header() {
  return (
    <header className="w-full border-b py-3 bg-white text-right pl-2">
      <CommonContainer>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-12 w-12 " color="#4169E1" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 p-4">
              <SheetHeader></SheetHeader>

              <nav className="mt-6 flex flex-col space-y-4">
                {links.map((item, idx) => (
                  <Link key={idx} href="#">
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* <span className="font-bold text-primary">ابرفردوسی</span> */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="h-6"
            width={107}
            height={40}
          />
        </div>

        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
          {links.map((item, idx) => (
            <Dropdown key={idx} label={item} />
          ))}

          <span>...</span>
        </nav>

        <div className="flex items-center gap-2">
          <div className='bg-[#bae7e5] rounded-md p-0.5'>
            <Button variant="light_green">
              <span className="hidden md:block">051-38804347</span>
              <Phone />
            </Button>
          </div>
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
