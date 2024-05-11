import { RightIntroduceItemProps } from './RightIntroduceItem.type';

const RightIntroduceItem = ({ icon, title, description }: RightIntroduceItemProps) => {
  return (
    <li className='flex gap-[1.6rem] main_page_550:gap-[3.2rem] items-center'>
      <i className='w-[4rem] h-[4rem] main_page_550:w-[8rem] main_page_550:h-[8rem]'>{icon}</i>

      <span className='flex flex-col'>
        <h6 className='text-size16 main_page_550:text-size28 font-medium main_page_550:text-nowrap'>
          {title}
        </h6>
        <p className='text-size12 main_page_550:text-size16 font-regular main_page_550:text-nowrap'>
          {description}
        </p>
      </span>
    </li>
  );
};

export default RightIntroduceItem;
