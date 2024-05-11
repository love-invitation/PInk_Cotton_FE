import { LayerIcon, PhoneMockup } from '@/components/server';

const MainLeftIntroduce = () => {
  return (
    <article className='border-2 border-red-300 flex justify-center items-end gap-[0.3rem] select-none'>
      <div className='border-2 border-green-300 flex flex-col items-center gap-[3rem]'>
        <PhoneMockup>
          {
            /*
              TODO

              추후 Template 넣기
            */
            null
          }
        </PhoneMockup>
        <p className='text-size16 font-regular text-gray-400 mb-[2rem]'>화면을 내려보세요!</p>
      </div>

      <LayerIcon />
    </article>
  );
};

export default MainLeftIntroduce;
