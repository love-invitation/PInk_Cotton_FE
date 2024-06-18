import { useFormContext } from 'react-hook-form';

import { Accordion, Input, UploadImage } from '@/components/client';

import { twJoin } from 'tailwind-merge';

const CoverInput = () => {
  const { watch, setValue } = useFormContext();
  const className = twJoin(
    'bg-gray_900 w-[16rem] h-[16rem] rounded-[1rem] flex items-center justify-center',
    watch('cover.image') && 'bg-transparent',
  );

  return (
    <Accordion
      buttonTitle='표지'
      type='edit'
      defaultToggleValue
    >
      <div className='flex flex-col gap-[4.7rem] py-[4rem]'>
        <UploadImage
          className='gap-[4rem]'
          onChange={(image) => setValue('cover.image', image[0])}
        >
          <Input.Label>사진</Input.Label>
          <div className={className}>
            <UploadImage.InputLabel visible={!watch('cover.image')}>
              클릭 후 업로드
            </UploadImage.InputLabel>
            <UploadImage.View
              className='w-full h-full'
              alt='청첩장 표지'
              fill
            />
          </div>
        </UploadImage>
        <Input className='gap-[3.3rem]'>
          <Input.Label>텍스트</Input.Label>
          <div className='flex flex-col gap-[1.7rem]'>
            <div className='flex gap-[1.7rem]'>
              <Input.Input
                name='groom.name'
                placeholder='신랑님 이름'
              />
              <Input.Input
                name='bride.name'
                placeholder='신부님 이름'
              />
            </div>
            <Input.Input
              name='cover.contents'
              placeholder='예약 일시 및 장소'
            />
          </div>
        </Input>
      </div>
    </Accordion>
  );
};

export default CoverInput;
