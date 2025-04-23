import { Button } from '@/components/ui/button';
import React from 'react';

const LinkCard = ({ text }: { text: string }) => {
  return (
    <Button variant="link_style" className="h-16">
      {text}
    </Button>
  );
};

export default LinkCard;
