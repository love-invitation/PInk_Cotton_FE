'use client';

import { useFramerInView } from '@/hooks';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { INVITE_STYLE } from '../../Invite.style';
import { InviteArticleProps } from './InviteArticle.type';
import { ArticleGroomBrideInfo } from './components';
import useArticleInnerText from './hooks/useArticleInnerText/useArticleInnerText';

import { motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

const InviteArticle = ({ article }: InviteArticleProps) => {
  const articleRef = useArticleInnerText({ article: article.contents });
  const { ref, inView } = useFramerInView<HTMLSpanElement>({ once: true });

  const { groom, bride } = article;

  return (
    <article className={twJoin(INVITE_STYLE.LAYOUT, 'px-[1.6rem] gap-[4.5rem]')}>
      <motion.span
        ref={ref}
        className='w-full relative flex flex-col text-pink_500 gap-[1rem] opacity-0'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={INVITE_ANIMATION.DURATION}
      >
        <h2 className={INVITE_STYLE.TITLE}>INVITATION</h2>
        <h1 className='w-full flex justify-center text-size22 break-keep text-center'>
          {article.title}
        </h1>
      </motion.span>

      <motion.p
        ref={articleRef}
        className='w-full relative text-size18 text-center whitespace-pre-line leading-[3.2rem]'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ ...INVITE_ANIMATION.DURATION, delay: 0.6 }}
      />

      <motion.span
        className='w-full relative flex flex-col gap-[1rem]'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ ...INVITE_ANIMATION.DURATION, delay: 1.2 }}
      >
        <ArticleGroomBrideInfo info={groom} />

        <ArticleGroomBrideInfo info={bride} />
      </motion.span>
    </article>
  );
};

export default InviteArticle;
