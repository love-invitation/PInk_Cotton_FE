'use client';

import { useRef } from 'react';

import { RightIntroduceItem } from './_components';
import { INTRODUCE_LIST } from './_constants';

import { motion, useInView } from 'framer-motion';

const MainRightIntroduce = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <article
      className='laptop:w-[54rem] min-h-[37rem] overflow-hidden'
      ref={ref}
    >
      {isInView && (
        <motion.ul
          className='flex flex-col gap-[4rem] px-[1rem]'
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {INTRODUCE_LIST.map(({ icon, title, description }, index) => (
            <RightIntroduceItem
              key={title}
              icon={icon}
              title={title}
              description={description}
              delayTime={index * 0.3}
            />
          ))}
        </motion.ul>
      )}
    </article>
  );
};

export default MainRightIntroduce;
