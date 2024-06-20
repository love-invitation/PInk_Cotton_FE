import { WeddingTemplates } from '@/components/client';
import { LayerIcon, PhoneMockup } from '@/components/server';

const TEMPLATE_TEMPORARY_VALUE = {
  groom: '도레미',
  bride: '파솔라',
  detail: '2025.10.20. 토요일 오후 2시 \n 메종 드 프라이어 그랜드홀',
  imageUrl:
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png',
};

const MainLeftIntroduce = () => {
  return (
    <article className='flex justify-center items-end gap-[0.1rem] laptop:gap-[0.3rem] select-none py-[2rem]'>
      <div className='flex flex-col items-center gap-[1.6rem] laptop:gap-[3rem]'>
        <div className='w-[24rem] laptop:w-[30rem] h-[46.2rem] laptop:h-[57.7rem]'>
          <PhoneMockup
            width='100%'
            height='100%'
          >
            <WeddingTemplates
              id={4}
              imageUrl={TEMPLATE_TEMPORARY_VALUE.imageUrl}
              groomName={TEMPLATE_TEMPORARY_VALUE.groom}
              brideName={TEMPLATE_TEMPORARY_VALUE.bride}
              details={TEMPLATE_TEMPORARY_VALUE.detail}
            />
          </PhoneMockup>
        </div>
        <p className='text-size16 font-regular text-gray-400'>화면을 내려보세요!</p>
      </div>

      <div className='w-[6.4rem] laptop:w-[10rem] h-[7rem] laptop:h-[11.3rem]'>
        <LayerIcon />
      </div>
    </article>
  );
};

export default MainLeftIntroduce;
