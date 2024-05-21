'use client';

import { RightIntroduceItemProps } from './RightIntroduceItem.type';

import { motion } from 'framer-motion';

const RightIntroduceItem = ({ icon, title, description, delayTime }: RightIntroduceItemProps) => {
  return (
    <motion.li
      className='flex gap-[2rem] laptop:gap-[3.2rem] items-center text-black_500 select-none'
      initial={{ opacity: 0, translateX: '-100%' }}
      animate={{ opacity: 1, translateX: '0%' }}
      transition={{ delay: delayTime, duration: 0.5 }}
    >
      <i className='min-w-[6rem] w-[6rem] min-h-[6rem] h-[6rem] laptop:min-w-[8rem] laptop:w-[8rem] laptop:min-h-[8rem] laptop:h-[8rem]'>
        {icon}
      </i>

      <span className='flex flex-col'>
        <h3 className='text-size24 laptop:text-size28 font-medium laptop:text-nowrap break-keep'>
          {title}
        </h3>
        <p className='text-size16 laptop:text-size16 font-regular laptop:text-nowrap break-keep'>
          {description}
        </p>
      </span>
    </motion.li>
  );
};

export default RightIntroduceItem;
