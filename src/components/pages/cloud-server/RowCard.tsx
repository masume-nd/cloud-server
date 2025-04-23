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
    <Card className="flex flex-col md:flex-row items-start gap-4 ">
      <div className="relative w-[40%] md:w-1/4 aspect-[4/3] rounded overflow-hidden">
        <Image src={img} alt="..." fill className="object-cover" />
      </div>
      <CardContent className="p-4 space-y-2">
        <p className="font-bold text-right">{title}</p>
        <p className="text-sm text-right">{description}</p>
        <Link href="#" className="text-blue-600 text-sm">
          ادامه...
        </Link>
      </CardContent>
    </Card>
  );
};

export default RowCard;
