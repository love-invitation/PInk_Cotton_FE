import { useFormContext } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { WeddingTemplates } from '@/components/client';
import { useGetElementWidth } from '@/hooks';

const InvitationCover = () => {
  const { watch } = useFormContext();
  const { ref, width } = useGetElementWidth();
  const { id } = useParams();

  const IMAGE_ASSETS =
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png';

  return (
    <section className='min-w-[20rem] w-[40%] mobile:w-full'>
      <article
        ref={ref}
        className='w-full h-[20rem] shadow-shadow_500'
        style={{ height: `${width * 1.76}px`, borderRadius: `${width * 0.0702}px` }}
      >
        <WeddingTemplates
          //  여기 해결 방법 제시좀 부탁드립니다
          id={typeof id === 'string' ? id : ''}
          details={watch('cover.contents')}
          groomName={watch('groom.name')}
          brideName={watch('bride.name')}
          imageUrl={watch('cover.image') || IMAGE_ASSETS}
        />
      </article>
    </section>
  );
};

export default InvitationCover;
