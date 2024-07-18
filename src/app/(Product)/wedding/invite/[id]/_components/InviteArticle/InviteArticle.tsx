'use client';

import { DarkFlowerIcon, DotIcon } from '@/components/server';

import { InviteArticleProps } from './InviteArticle.type';

const InviteArticle = ({ article }: InviteArticleProps) => {
  const contentReplaced = article.contents.replace(/\\n | \n/g, '\n');

  const { groom, bride } = article;
  return (
    <article className='w-full py-[16rem] px-[1.6rem] flex flex-col gap-[4.5rem] border-2 border-red-400 relative overflow-scroll'>
      {/* title */}
      <span className='w-full flex flex-col text-pink_500 gap-[1rem]'>
        <h2 className='w-full flex justify-center text-size18 tracking-[0.6rem] text-center'>
          INVITATION
        </h2>
        <h1 className='w-full flex justify-center text-size22 break-keep text-center'>
          {article.title}
        </h1>
      </span>

      {/* content */}
      <p className='w-full text-size18 text-center whitespace-pre-line leading-[4rem]'>
        {contentReplaced}
      </p>

      <span className='w-full flex flex-col gap-[1rem]'>
        <span className='w-full flex justify-center items-center gap-[0.4rem] text-size20'>
          {!groom.father.deceased && <DarkFlowerIcon size='1.8rem' />}
          <p>{groom.father.name}</p>
          <DotIcon />
          {!groom.mother.deceased && <DarkFlowerIcon size='1.8rem' />}
          <p>{groom.mother.name}</p>
          <small className='text-18'>의 장남</small>
          <p>{groom.name}</p>
        </span>

        <span className='w-full flex justify-center items-center gap-[0.4rem] text-size20'>
          {!bride.father.deceased && <DarkFlowerIcon size='1.8rem' />}
          <p>{bride.father.name}</p>
          <DotIcon />
          {!bride.mother.deceased && <DarkFlowerIcon size='1.8rem' />}
          <p>{bride.mother.name}</p>
          <small className='text-18'>의 차녀</small>
          <p>{bride.name}</p>
        </span>
      </span>
    </article>
  );
};

export default InviteArticle;
