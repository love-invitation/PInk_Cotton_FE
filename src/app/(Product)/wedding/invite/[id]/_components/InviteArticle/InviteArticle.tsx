'use client';

import { useRef } from 'react';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { InviteArticleProps } from './InviteArticle.type';
import { ArticleGroomBrideInfo } from './components';

import { motion, useInView } from 'framer-motion';

const InviteArticle = ({ article }: InviteArticleProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const contentReplaced = article.contents.replace(/\\n | \n/g, '\n');
  const { groom, bride } = article;
  return (
    <article className='w-full h-fit py-[16rem] px-[1.6rem] flex flex-col items-center gap-[4.5rem] relative overflow-hidden'>
      <motion.span
        ref={ref}
        className='w-full relative flex flex-col text-pink_500 gap-[1rem] opacity-0'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ duration: 1.5 }}
      >
        <h2 className='w-full flex justify-center text-size16 tracking-[0.4rem] text-center'>
          INVITATION
        </h2>
        <h1 className='w-full flex justify-center text-size22 break-keep text-center'>
          {article.title}
        </h1>
      </motion.span>
      <motion.p
        className='w-full relative text-size18 text-center whitespace-pre-line leading-[3.2rem]'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        {contentReplaced}
      </motion.p>
      <motion.span
        className='w-full relative flex flex-col gap-[1rem]'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        <ArticleGroomBrideInfo info={groom} />

        <ArticleGroomBrideInfo info={bride} />
      </motion.span>
    </article>
  );
};

export default InviteArticle;
