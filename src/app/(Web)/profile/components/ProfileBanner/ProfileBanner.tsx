import { Banner } from '@/components/server';

const ProfileBanner = () => {
  return (
    <Banner className='px-[10%] py-[5rem] flex flex-col gap-[2rem] bg-[#FFF9FA]'>
      <h3 className='text-[2.4rem] font-semibold'>안내사항</h3>
      <ol className='list-disc text-[1.8rem] mx-[2.5rem]'>
        <li>결제 후에는 자유롭게 모바일청첩장을 사용할 수 있습니다.</li>
        <li>제작일과 관계없이 예식일 +90일 후 청첩장이 삭제됩니다.</li>
      </ol>
    </Banner>
  );
};

export default ProfileBanner;
