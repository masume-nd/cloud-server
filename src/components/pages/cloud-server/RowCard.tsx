import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RowCard = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <Card className="flex flex-row items-start gap-4 p-4">
      <div className="relative w-full md:w-1/2 aspect-[3/3] md:aspect-[4/3] rounded overflow-hidden">
        <Image src={img} alt="..." fill className="object-cover" />
      </div>
      <CardContent className="flex flex-col p-4 space-y-2">
        <p className="font-bold text-right">{title}</p>
        <p className="text-sm text-muted-foreground text-right line-clamp-1">{description}</p>
        <div className='self-end'>
          <Link href="#" className="text-[#8894A8] text-sm">
            ادامه...
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RowCard;
