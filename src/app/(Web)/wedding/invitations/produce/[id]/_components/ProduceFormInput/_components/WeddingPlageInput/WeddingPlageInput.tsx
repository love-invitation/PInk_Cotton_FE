'use client';

import { Accordion, Input, PinkMap } from '@/components/client';

import { useGetAddress } from './hooks';

const WeddingPlageInput = () => {
  const { center, handleClickAddress, address } = useGetAddress();

  return (
    <Accordion
      type='edit'
      buttonTitle='예식 장소'
      defaultToggleValue
    >
      <Input className='w-full flex-col gap-[2rem] py-[2rem]'>
        <div className='w-full flex flex-col gap-[1rem]'>
          <Input.Label>예식장 이름</Input.Label>
          <Input.Input
            name='place.name'
            placeholder='PINK COTTON 웨딩 홀'
          />
        </div>

        <div className='w-full flex flex-col gap-[1rem]'>
          <Input.Label>층과 홀</Input.Label>
          <Input.Input
            name='place.detail'
            placeholder='7F, 이스트홀'
          />
        </div>

        <div className='w-full flex flex-col gap-[1rem]'>
          <Input.Label>주소</Input.Label>
          <input
            readOnly
            value={address}
            placeholder='주소'
            className='focus:border-pink_300 focus:border-2 h-[4.8rem] w-full rounded-radius10 border border-solid border-placeholder_100 px-[2.4rem] py-[1.6rem] text-[1.6rem] font-medium bg-white_100'
            onClick={handleClickAddress}
          />
        </div>

        {center && (
          <PinkMap
            center={center}
            width='100%'
            height='25rem'
          />
        )}
      </Input>
    </Accordion>
  );
};

export default WeddingPlageInput;
