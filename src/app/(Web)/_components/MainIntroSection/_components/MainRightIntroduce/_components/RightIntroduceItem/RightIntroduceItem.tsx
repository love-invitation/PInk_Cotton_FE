'use client';

import { RightIntroduceItemProps } from './RightIntroduceItem.type';

import { motion } from 'framer-motion';

const RightIntroduceItem = ({ icon, title, description, delayTime }: RightIntroduceItemProps) => {
  return (
    <motion.li
      className='flex gap-[1.6rem] main_page_550:gap-[3.2rem] items-center text-black_500 select-none'
      initial={{ opacity: 0, translateX: '-100%' }}
      animate={{ opacity: 1, translateX: '0%' }}
      transition={{ delay: delayTime, duration: 0.5 }}
    >
      <i className='min-w-[4rem] w-[4rem] min-h-[4rem] h-[4rem] main_page_550:min-w-[8rem] main_page_550:w-[8rem] main_page_550:min-h-[8rem] main_page_550:h-[8rem]'>
        {icon}
      </i>

      <span className='flex flex-col'>
        <h3 className='text-size16 main_page_550:text-size28 font-medium main_page_550:text-nowrap'>
          {title}
        </h3>
        <p className='text-size12 main_page_550:text-size16 font-regular main_page_550:text-nowrap'>
          {description}
        </p>
      </span>
    </motion.li>
  );
};

export default RightIntroduceItem;
