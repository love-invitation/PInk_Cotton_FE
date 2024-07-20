'use client';

import { useRef } from 'react';

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
        className='w-full flex flex-col text-pink_500 gap-[1rem] opacity-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className='w-full flex justify-center text-size18 tracking-[0.6rem] text-center'>
          INVITATION
        </h2>
        <h1 className='w-full flex justify-center text-size22 break-keep text-center'>
          {article.title}
        </h1>
      </motion.span>

      <motion.p
        className='w-full text-size18 text-center whitespace-pre-line leading-[3.2rem]'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        {contentReplaced}
      </motion.p>

      <motion.span
        className='w-full flex flex-col gap-[1rem]'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        <ArticleGroomBrideInfo info={groom} />

        <ArticleGroomBrideInfo info={bride} />
      </motion.span>
    </article>
  );
};

export default InviteArticle;
