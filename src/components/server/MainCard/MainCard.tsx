import TemplateCard from '../TemplateCard/TemplateCard';
import { MainCardProps } from './MainCard.type';

const MainCard = ({ children, name, isNew = false, price, discountPrice }: MainCardProps) => {
  return (
    <figure className='w-[35rem] h-[61.5rem] border border-red-300 flex flex-col items-center justify-center gap-[2.8rem]'>
      <TemplateCard size='medium'>{children}</TemplateCard>

      <figcaption className='w-full flex flex-col items-center gap-[2rem]'>
        <span className='w-full flex justify-center gap-[1rem]'>
          <h1 className='text-size22 font-semiBold'>{name}</h1>
          {isNew && <p className='text-size12 font-semiBold text-pink_500 rotate-[20deg]'>NEW</p>}
        </span>

        <span className='flex text-size20 font-medium gap-[1.6rem]'>
          <p>{discountPrice || price}원</p>
          {discountPrice && <p className='text-gray-400 line-through'>{price}원</p>}
        </span>
      </figcaption>
    </figure>
  );
};

export default MainCard;
