import { useFormContext } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { Button, WeddingTemplates } from '@/components/client';
import { useGetElementWidth } from '@/hooks';

const InvitationCover = () => {
  const { watch } = useFormContext();
  const { ref, width } = useGetElementWidth();
  const { id } = useParams();

  const IMAGE_ASSETS =
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png';
  const coverImageUrl = watch('cover.image')
    ? URL.createObjectURL(watch('cover.image'))
    : IMAGE_ASSETS;

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
          imageUrl={coverImageUrl}
        />
      </article>
      <Button
        backgroundColor='black'
        className='w-full h-[6rem] rounded-[1rem]'
        fontColor='white'
        fontSize='1.8rem'
      >
        저장하기
      </Button>
    </section>
  );
};

export default InvitationCover;
