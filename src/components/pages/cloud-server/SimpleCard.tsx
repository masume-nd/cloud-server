import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';

const SimpleCard = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => {
  return (
    <Card className="bg-gradient-to-l from-[#2E4BA0] to-[#4169E1] text-white px-6 py-6 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
        <p className="text-base">{title}</p>
        <Button className="w-full md:w-auto" variant="simple">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default SimpleCard;
