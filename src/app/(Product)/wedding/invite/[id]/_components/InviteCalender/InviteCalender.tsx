'use client';

import { useRef } from 'react';

import { Calender } from '@/components/client';
import { Divider } from '@/components/server';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { INVITE_STYLE } from '../../Invite.style';
import { CONVERT_DAY } from './InviteCalender.constants';
import { InviteCalenderProps } from './InviteCalender.type';
import { useConvertInviteDate } from './hooks';

import { motion, useInView } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

const InviteCalender = ({ calenderData }: InviteCalenderProps) => {
  const date = useConvertInviteDate({ calenderData });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <article
      ref={ref}
      className={twJoin(INVITE_STYLE.LAYOUT, 'items-center gap-[4rem]')}
    >
      {inView && (
        <>
          <motion.h2
            className={INVITE_STYLE.TITLE}
            initial={INVITE_ANIMATION.INIT}
            animate={INVITE_ANIMATION.ANIMATE}
            transition={INVITE_ANIMATION.DURATION}
          >
            WEDDING DAY
          </motion.h2>

          <motion.span
            className='w-full relative flex flex-col gap-[1.2rem] items-center text-size20'
            initial={INVITE_ANIMATION.INIT}
            animate={INVITE_ANIMATION.ANIMATE}
            transition={{ ...INVITE_ANIMATION.DURATION, delay: 0.3 }}
          >
            <p>{`${date.year}.${date.month}.${date.day}`}</p>
            <p className='text-size18'>{`${CONVERT_DAY[date.week]} ${date.period} ${date.hours}시 ${date.minute}분`}</p>
          </motion.span>

          <motion.span
            initial={INVITE_ANIMATION.INIT}
            animate={INVITE_ANIMATION.ANIMATE}
            transition={{ ...INVITE_ANIMATION.DURATION, delay: 0.6 }}
            className='w-[90%] relative'
          >
            <Divider className='h-[0.2rem]' />
          </motion.span>

          <motion.div
            initial={INVITE_ANIMATION.INIT}
            animate={INVITE_ANIMATION.ANIMATE}
            transition={{ ...INVITE_ANIMATION.DURATION, delay: 0.9 }}
            className='w-full relative'
          >
            <Calender
              month={Number(date.month)}
              date={Number(date.day)}
              week={date.week}
            />
          </motion.div>

          <motion.span
            initial={INVITE_ANIMATION.INIT}
            animate={INVITE_ANIMATION.ANIMATE}
            transition={{ ...INVITE_ANIMATION.DURATION, delay: 1.2 }}
            className='w-[90%] relative'
          >
            <Divider className='h-[0.2rem]' />
          </motion.span>
        </>
      )}
    </article>
  );
};

export default InviteCalender;
