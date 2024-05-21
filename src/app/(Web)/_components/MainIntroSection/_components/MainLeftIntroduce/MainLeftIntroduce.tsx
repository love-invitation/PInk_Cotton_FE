import { LayerIcon, PhoneMockup } from '@/components/server';

const MainLeftIntroduce = () => {
  return (
    <article className='flex justify-center items-end gap-[0.1rem] laptop:gap-[0.3rem] select-none py-[2rem]'>
      <div className='flex flex-col items-center gap-[1.6rem] laptop:gap-[3rem]'>
        <div className='w-[24rem] laptop:w-[30rem] h-[46.2rem] laptop:h-[57.7rem]'>
          <PhoneMockup
            width='100%'
            height='100%'
          >
            {
              /*
              TODO

              추후 Template 넣기
            */
              null
            }
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
