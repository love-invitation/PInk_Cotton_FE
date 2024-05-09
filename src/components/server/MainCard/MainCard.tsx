import { Button } from '@/components/client';

import TemplateCard from '../TemplateCard/TemplateCard';
import { MainCardProps } from './MainCard.type';

const MainCard = ({ children, name, isNew = false, price, discountPrice }: MainCardProps) => {
  return (
    <figure className='w-[35rem] h-[61.5rem] border border-red-300 flex flex-col items-center justify-center gap-[2.8rem] main_card_max:w-[17.7rem] main_card_max:h-[37rem] main_card_max:gap-[2rem]'>
      <TemplateCard
        size='medium'
        className='main_card_max:hidden'
      >
        {children}
      </TemplateCard>

      <TemplateCard
        size='small'
        className='hidden main_card_max:block'
      >
        {children}
      </TemplateCard>

      <figcaption className='flex flex-col items-center gap-[2rem] main_card_max:gap-[1rem]'>
        <span className='relative flex justify-center'>
          <h1 className='text-size22 font-semiBold main_card_max:text-size16'>{name}</h1>
          {isNew && (
            <p className='text-size12 font-semiBold text-pink_500 rotate-[20deg] absolute left-[110%] main_card_max:text-size10 main_card_max:left-[102%]'>
              NEW
            </p>
          )}
        </span>

        <span className='flex text-size20 font-medium gap-[1.6rem] main_card_max:gap-[1rem] main_card_max:text-size12'>
          <p>{discountPrice || price}원</p>
          {discountPrice && <p className='text-gray-400 line-through'>{price}원</p>}
        </span>
      </figcaption>

      <div className='w-full h-[3rem] px-[1rem] gap-[0.6rem] hidden main_card_max:flex'>
        <Button
          fontSize='1.4rem'
          fontWeight='regular'
          fontColor='black'
          backgroundColor='naked'
          border='gray'
          className='flex-1 h-full'
          onClick={() => {
            /* 
              TODO 
              샘플 보기에 대한 로직 추가
            */
          }}
        >
          샘플보기
        </Button>

        <Button
          fontSize='1.4rem'
          fontWeight='regular'
          fontColor='white'
          backgroundColor='pink'
          border='pink'
          className='flex-1 h-full bg-pink_300'
          onClick={() => {
            /* 
              TODO 
              제작 하기에 대한 로직 추가
            */
          }}
        >
          제작하기
        </Button>
      </div>
    </figure>
  );
};

export default MainCard;
