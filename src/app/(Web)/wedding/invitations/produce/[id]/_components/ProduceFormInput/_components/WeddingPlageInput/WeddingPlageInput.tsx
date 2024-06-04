'use client';

import { Accordion, Input } from '@/components/client';

const WeddingPlageInput = () => {
  return (
    <Accordion
      type='edit'
      buttonTitle='예식 장소'
      defaultToggleValue
    >
      <Input className=''>input</Input>
    </Accordion>
  );
};

export default WeddingPlageInput;
