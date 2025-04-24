import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const LinkCard = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <Link href="">
      <div className="flex items-center justify-between h-16 bg-[#F1F4FD] text-secondary-foreground rounded-2xl px-6">
        <div className="flex gap-2">
          {icon}
          <p> {text}</p>
        </div>
        <div className="rotate-45 align-top">
          <ArrowLeft />
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;
