'use client';

import { useFormContext } from 'react-hook-form';

import { Accordion, Input, UploadImage } from '@/components/client';
import { useToggle } from '@/hooks';

import { GalleryCarousel } from './_components';

const GalleryInput = () => {
  const { isToggle, handleToggle } = useToggle(false);
  const { setValue } = useFormContext();
  const limit = 20;

  return (
    <>
      <Accordion
        buttonTitle='갤러리'
        type='edit'
      >
        <UploadImage
          limit={limit}
          onChange={(images) => setValue('gallery', images)}
          className='flex-col items-center gap-[2.7rem] py-[4rem]'
        >
          <Input.Label>최대 {limit}장까지 업로드 가능해요.</Input.Label>
          <UploadImage.InputLabel multiple>사진 업로드</UploadImage.InputLabel>
          <UploadImage.ListView
            fill
            alt='청첩장 갤러리'
            className='object-contain'
            ulClassName='w-full'
            onClick={handleToggle}
          />
          <UploadImage.ClearButton />
        </UploadImage>
      </Accordion>
      {isToggle && <GalleryCarousel onClick={handleToggle} />}
    </>
  );
};

export default GalleryInput;
