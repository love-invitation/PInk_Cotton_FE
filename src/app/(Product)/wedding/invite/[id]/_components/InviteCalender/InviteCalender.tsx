'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

const InviteCalender = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const initAni = {
    bottom: '2.4rem',
    opacity: 0,
  };

  const animate = {
    bottom: '0',
    opacity: 1,
  };

  return (
    <article
      ref={ref}
      className='w-full flex flex-col gap-[6rem] py-[12rem]'
    >
      {inView && (
        <>
          <motion.h2
            className='w-full relative flex justify-center text-size16 text-pink_500 tracking-[0.4rem] text-center'
            initial={initAni}
            animate={animate}
            transition={{ duration: 1 }}
          >
            WEDDING DAY
          </motion.h2>

          <motion.span
            className='w-full relative flex flex-col gap-[1.2rem] items-center text-size20'
            initial={initAni}
            animate={animate}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p>2024.04.24</p>
            <p className='text-size18'>토요일 오후 1시 30분</p>
          </motion.span>
        </>
      )}
    </article>
  );
};

export default InviteCalender;
