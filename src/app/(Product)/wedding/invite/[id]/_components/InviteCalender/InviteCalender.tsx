'use client';

import { useMemo, useRef } from 'react';

import { InviteCalenderProps } from './InviteCalender.type';

import { motion, useInView } from 'framer-motion';

const CONVERT_DAY: { [key: number]: string } = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};

const InviteCalender = ({ calenderData }: InviteCalenderProps) => {
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

  const date = useMemo(() => {
    const newDate = new Date(calenderData);

    const hours = newDate.getHours();
    const period = hours >= 12 ? '오후' : '오전';
    const convertHours = hours % 12 || 12;

    return {
      year: newDate.getFullYear(),
      month: (newDate.getMonth() + 1).toString().padStart(2, '0'),
      day: newDate.getDate().toString().padStart(2, '0'),
      week: newDate.getDay(),
      period,
      hours: convertHours.toString().toString().padStart(2, '0'),
      minute: newDate.getMinutes().toString().padStart(2, '0'),
    };
  }, [calenderData]);

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
            <p>{`${date.year}.${date.month}.${date.day}`}</p>
            <p className='text-size18'>{`${CONVERT_DAY[date.week]} ${date.period} ${date.hours}시 ${date.minute}분`}</p>
          </motion.span>
        </>
      )}
    </article>
  );
};

export default InviteCalender;
