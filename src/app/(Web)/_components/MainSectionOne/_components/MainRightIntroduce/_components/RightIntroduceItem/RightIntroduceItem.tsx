import { RightIntroduceItemProps } from './RightIntroduceItem.type';

const RightIntroduceItem = ({ icon, title, description }: RightIntroduceItemProps) => {
  return (
    <li className='flex gap-[3.2rem] items-center'>
      {icon}

      <span className='flex flex-col'>
        <h6 className='text-size28 font-medium text-nowrap'>{title}</h6>
        <p className='text-size16 font-regular text-nowrap'>{description}</p>
      </span>
    </li>
  );
};

export default RightIntroduceItem;
