'use client';

import { useRef } from 'react';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { INVITE_STYLE } from '../../Invite.style';
import { InviteContactProps } from './InviteContact.type';
import { ContactList } from './components';

import { motion, useInView } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

const InviteContact = ({ contactData }: InviteContactProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <article
      className={twJoin(
        INVITE_STYLE.LAYOUT,
        'gap-[4rem] bg-[#f9f9f9] shadow-shadow_500 border-t-[0.1rem] border-b-[0.1rem]',
      )}
    >
      <motion.h2
        ref={ref}
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={INVITE_ANIMATION.DURATION}
        className={twJoin(INVITE_STYLE.TITLE, 'relative')}
      >
        CONTACT
      </motion.h2>

      <motion.div
        className='w-full flex justify-around relative'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ ...INVITE_ANIMATION.DURATION, delay: 0.6 }}
      >
        <ContactList
          type='groom'
          data={contactData.groom}
        />
        <ContactList
          type='bride'
          data={contactData.bride}
        />
      </motion.div>
    </article>
  );
};

export default InviteContact;
