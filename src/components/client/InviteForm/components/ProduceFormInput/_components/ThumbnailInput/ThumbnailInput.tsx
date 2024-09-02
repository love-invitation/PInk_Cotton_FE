'use client';

import { useFormContext } from 'react-hook-form';

import { Accordion, Input, UploadImage } from '@/components/client';
import { INVITATION_FORM, InvitationInput } from '@/constants';

import { useImageFormError } from '../../hooks';

import { twJoin } from 'tailwind-merge';

const ThumbnailInput = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext<InvitationInput>();
  const { handleChangeImage } = useImageFormError({ type: 'thumbnail' });
  const thumbnailImage = watch('thumbnail.image');

  return (
    <Accordion
      buttonTitle='공유 썸네일'
      type='edit'
      defaultToggleValue
    >
      <div className='flex flex-col gap-[4.7rem] py-[4rem]'>
        <UploadImage
          className='gap-[4rem]'
          onChange={handleChangeImage}
          defaultImages={(thumbnailImage && [thumbnailImage]) || undefined}
        >
          <Input.Label>사진</Input.Label>
          <div
            className={twJoin(
              'relative bg-gray_900 w-[16rem] h-[16rem] rounded-[1rem] flex items-center justify-center',
              thumbnailImage && 'bg-transparent',
            )}
          >
            <UploadImage.InputLabel visible={!thumbnailImage}>
              클릭 후 업로드
            </UploadImage.InputLabel>
            <UploadImage.View
              className='w-full h-full'
              alt='청첩장 표지'
              fill
            />
            <Input.ErrorMessage className='absolute bottom-[-3rem]'>
              {errors.thumbnail?.image?.message}
            </Input.ErrorMessage>
          </div>
        </UploadImage>
        <Input className='flex-col gap-[1rem]'>
          <Input className='gap-[3.3rem] items-center'>
            <Input.Label>제목</Input.Label>
            <Input.Input
              name='thumbnail.title'
              placeholder='(하트) 결혼합니다'
              registerOptions={INVITATION_FORM.REGISTER_OPTION.THUMBNAIL.title}
            />
          </Input>
          <Input.ErrorMessage>{errors.thumbnail?.title?.message}</Input.ErrorMessage>
        </Input>
        <Input className='flex-col gap-[1rem]'>
          <Input className='gap-[3.3rem] items-center'>
            <Input.Label>내용</Input.Label>
            <Input.Input
              name='thumbnail.contents'
              placeholder='1월 18일 목요일 오후 1시 30분'
              registerOptions={INVITATION_FORM.REGISTER_OPTION.THUMBNAIL.CONTENTS}
            />
          </Input>
          <Input.ErrorMessage>{errors.thumbnail?.contents?.message}</Input.ErrorMessage>
        </Input>
      </div>
    </Accordion>
  );
};

export default ThumbnailInput;
