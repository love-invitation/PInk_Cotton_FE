import { DarkFlowerIcon, DotIcon } from '@/components/server';

import { ArticleGroomBrideInfoProps } from './ArticleGroomBrideInfo.type';

const ArticleGroomBrideInfo = ({ info }: ArticleGroomBrideInfoProps) => {
  return (
    <span className='w-full flex justify-center items-center gap-[0.6rem] text-size20 font-bold text-nowrap'>
      {info.father.deceased && <DarkFlowerIcon size='1.8rem' />}
      <p>{info.father.name}</p>
      <DotIcon />
      {info.mother.deceased && <DarkFlowerIcon size='1.8rem' />}
      <p>{info.mother.name}</p>
      <small className='text-18 text-nowrap font-regular'>{`의 ${info.relation}`}</small>
      <p>{info.name}</p>
    </span>
  );
};

export default ArticleGroomBrideInfo;
