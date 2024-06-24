'use client';

import { useFormContext } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { Button, WeddingTemplates } from '@/components/client';
import { MUTATE_OPTIONS } from '@/constants';
import { useGetElementWidth, usePreviewImage } from '@/hooks';
import { useMutation } from '@tanstack/react-query';

import { Invitation } from '../../_constants/DefaultValue';

const InvitationCover = () => {
  const { watch, handleSubmit } = useFormContext<Invitation>();
  const { mutate } = useMutation(MUTATE_OPTIONS.INVITATION());
  const { ref, width } = useGetElementWidth();
  const { id } = useParams();
  const templateId = typeof id === 'string' ? Number(id) : Number(id[0]);
  const { imageUrl } = usePreviewImage(watch('cover.image'));
  const IMAGE_ASSETS =
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png';

  const onValid = (invitationInfo: Invitation) => {
    mutate({ id: templateId, invitationInfo });
  };

  return (
    <section className='min-w-[20rem] w-[40%] mobile:w-full flex flex-col gap-[2.7rem]'>
      <article
        ref={ref}
        className='w-full h-[20rem] shadow-shadow_500'
        style={{ height: `${width * 1.76}px`, borderRadius: `${width * 0.0702}px` }}
      >
        <WeddingTemplates
          id={Number(id || +id[0])}
          details={watch('cover.contents') || '예약 일시 및 장소'}
          groomName={watch('groom.name') || '신랑님 이름'}
          brideName={watch('bride.name') || '신부님 이름'}
          imageUrl={imageUrl || IMAGE_ASSETS}
        />
      </article>
      <Button
        type='submit'
        backgroundColor='black'
        className='w-full h-[6rem] rounded-[1rem]'
        fontColor='white'
        fontSize='1.8rem'
        onClick={handleSubmit(onValid)}
      >
        저장하기
      </Button>
    </section>
  );
};

export default InvitationCover;
