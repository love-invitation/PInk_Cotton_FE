'use client';

import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useParams } from 'next/navigation';

import { Button, WeddingTemplates } from '@/components/client';
import { SpinnerIcon } from '@/components/server';
import { DOMAIN_URL, InvitationInput } from '@/constants';
import { useGetElementWidth, usePreviewImage } from '@/hooks';

import { InvitationCoverProps } from './InvitationCover.type';

const InvitationCover = ({ isPending, onClick }: InvitationCoverProps) => {
  const { watch, handleSubmit } = useFormContext<InvitationInput>();
  const { imageUrl } = usePreviewImage(watch('cover.image'));
  const { ref, width } = useGetElementWidth();
  const { id } = useParams();
  const templateId = typeof id === 'string' ? Number(id) : Number(id[0]);

  const onValid = (invitationInfo: InvitationInput) => {
    onClick(templateId, invitationInfo);
  };

  const onFail = () => {
    toast.warn(
      <h1 className='text-[2rem] text-center'>
        요구사항을
        <br />
        모두 만족해주세요
      </h1>,
    );
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
          imageUrl={imageUrl || DOMAIN_URL.MAIN_IMAGE}
        />
      </article>
      <Button
        type='submit'
        disabled={isPending}
        backgroundColor='pink'
        className='w-full h-[6rem] rounded-[1rem] flex justify-center items-center'
        fontColor='white'
        fontSize='1.8rem'
        onClick={handleSubmit(onValid, onFail)}
      >
        {isPending ? <SpinnerIcon className='animate-spin' /> : '저장하기'}
      </Button>
    </section>
  );
};

export default InvitationCover;
