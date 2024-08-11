import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/client';
import { DOMAIN_URL } from '@/constants';

import { MyINvitationItemProps } from './MyInvitationItem.type';

const MyInvitationItem = ({
  imageUrl,
  title,
  lastModified,
  isPaid,
  tsid,
}: MyINvitationItemProps) => {
  return (
    <li className='flex flex-col items-center gap-[4rem]'>
      <Image
        width={230}
        height={400}
        src={imageUrl}
        alt='청첩장 커버'
        className='rounded-[2rem]'
      />
      <div className='flex items-center w-full justify-between gap-[2rem]'>
        <div>
          <h3 className='text-[2.4rem] font-semibold'>{title}</h3>
          <p className='text-[1.8rem]'>마지막 편집 | {lastModified}</p>
        </div>
        {isPaid ? (
          <Button className='w-[11rem]'>후기작성</Button>
        ) : (
          <Button className='w-[11rem]'>결제</Button>
        )}
      </div>
      <div className='flex gap-[1.1rem] items-center w-full'>
        <Link
          href={DOMAIN_URL.WEDDING_EDIT(tsid)}
          className='border bg-white_100 text-black_900 w-[11rem] h-[4.2rem] flex justify-center items-center text-[1.4rem] font-semibold'
        >
          편집
        </Link>
        <Link
          href={DOMAIN_URL.WEDDING_PREVIEW(tsid)}
          className='border bg-white_100 text-black_900 w-[11rem] h-[4.2rem] flex justify-center items-center text-[1.4rem] font-semibold'
        >
          미리보기
        </Link>
        {isPaid && (
          <Button className='border bg-white_100 text-black_900 w-[11rem]'>링크공유</Button>
        )}
      </div>
    </li>
  );
};

export default MyInvitationItem;
