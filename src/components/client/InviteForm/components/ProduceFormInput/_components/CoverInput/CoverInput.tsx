'use client';

import { useFormContext } from 'react-hook-form';

import { Accordion, Input, UploadImage } from '@/components/client';
import { INVITATION_FORM, InvitationInput } from '@/constants';

import { useImageFormError } from '../../hooks';

import { twJoin } from 'tailwind-merge';

const CoverInput = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext<InvitationInput>();
  const { handleChangeImage } = useImageFormError({ type: 'cover' });
  const coverImage = watch('cover.image');

  return (
    <Accordion
      buttonTitle='표지'
      type='edit'
      defaultToggleValue
    >
      <div className='flex flex-col gap-[4.7rem] py-[4rem]'>
        <UploadImage
          className='gap-[4rem]'
          onChange={handleChangeImage}
          defaultImages={(coverImage && [coverImage]) || undefined}
        >
          <Input.Label>사진</Input.Label>
          <div
            className={twJoin(
              'relative bg-gray_900 w-[16rem] h-[16rem] rounded-[1rem] flex items-center justify-center',
              coverImage && 'bg-transparent',
            )}
          >
            <UploadImage.InputLabel visible={!coverImage}>클릭 후 업로드</UploadImage.InputLabel>
            <UploadImage.View
              className='w-full h-full'
              alt='청첩장 표지'
              fill
            />
            <Input.ErrorMessage className='absolute bottom-[-3rem]'>
              {errors.cover?.image?.message}
            </Input.ErrorMessage>
          </div>
        </UploadImage>

        <Input className='gap-[3.3rem]'>
          <Input.Label>텍스트</Input.Label>
          <div className='flex flex-col gap-[1.7rem]'>
            <div className='flex gap-[1.7rem]'>
              <Input className='flex-col gap-[1rem]'>
                <Input.Input
                  name='groom.name'
                  placeholder='신랑님 이름'
                  registerOptions={INVITATION_FORM.REGISTER_OPTION.GROOM.NAME}
                />
                <Input.ErrorMessage>{errors?.groom?.name?.message}</Input.ErrorMessage>
              </Input>
              <Input className='flex-col gap-[1rem]'>
                <Input.Input
                  name='bride.name'
                  placeholder='신부님 이름'
                  registerOptions={INVITATION_FORM.REGISTER_OPTION.BRIDE.NAME}
                />
                <Input.ErrorMessage>{errors?.bride?.name?.message}</Input.ErrorMessage>
              </Input>
            </div>
            <Input className='flex-col gap-[1rem]'>
              <Input.Input
                name='cover.contents'
                placeholder='예약 일시 및 장소'
                registerOptions={INVITATION_FORM.REGISTER_OPTION.COVER.CONTENTS}
              />
              <Input.ErrorMessage>{errors?.cover?.contents?.message}</Input.ErrorMessage>
            </Input>
          </div>
        </Input>
      </div>
    </Accordion>
  );
};

export default CoverInput;
