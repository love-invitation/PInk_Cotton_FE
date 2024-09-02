'use client';

import { useFramerInView } from '@/hooks';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { INVITE_STYLE } from '../../Invite.style';
import { InviteGuestBookProps } from './InviteGuestBook.type';
import { BookComments, CreateBookComment } from './components';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const InviteGuestBook = ({ inviteId }: InviteGuestBookProps) => {
  const { ref, inView } = useFramerInView<HTMLSpanElement>({ once: true });

  return (
    <section className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[4rem]')}>
      <motion.span
        ref={ref}
        className='w-full flex flex-col items-center justify-center gap-[1.6rem] relative'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={INVITE_ANIMATION.DURATION}
      >
        <h2 className={INVITE_STYLE.TITLE}>GUEST BOOK</h2>
        <p className='text-size18 font-bold'>방명록</p>
        <p className='text-size14'>축복의 의미로 방명록을 작성해보세요.</p>
      </motion.span>

      <CreateBookComment
        inviteId={inviteId}
        inView={inView}
      />

      <BookComments
        inviteId={inviteId}
        inView={inView}
      />
    </section>
  );
};

export default InviteGuestBook;
