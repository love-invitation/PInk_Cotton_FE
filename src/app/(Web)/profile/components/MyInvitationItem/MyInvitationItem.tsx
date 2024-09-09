'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/client';
import { DOMAIN_URL } from '@/constants';

import { MyINvitationItemProps } from './MyInvitationItem.type';

const REVIEW_FORM_URL = process.env.NEXT_PUBLIC_REVIEW_FORM_URL as string;
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const PINK_COTTON_URL = process.env.NEXT_PUBLIC_PINK_COTTON_URL;

const MyInvitationItem = ({
  coverImageUrl,
  productInfoName,
  lastModified,
  isPaid,
  tsid,
  thumbnail,
}: MyINvitationItemProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { Kakao } = window;

      if (!Kakao.isInitialized()) {
        Kakao.init(KAKAO_API_KEY);
      }
    }
  }, []);

  const handleShare = () => {
    const { Kakao } = window;
    const { title: thumbnailTitle, contents, imageUrl: thumbnailImageUrl } = thumbnail;
    const linkUrl = `${PINK_COTTON_URL}${DOMAIN_URL.WEDDING_INVITE(tsid)}`;

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: thumbnailTitle,
        description: contents,
        imageUrl: thumbnailImageUrl,
        link: {
          mobileWebUrl: linkUrl,
          webUrl: linkUrl,
        },
      },
    });
  };

  return (
    <li className='flex flex-col items-center gap-[4rem] shadow p-[3rem] rounded-md'>
      <Image
        width={200}
        height={300}
        src={coverImageUrl}
        alt='청첩장 커버'
        className='rounded-[2rem]'
      />
      <div className='flex items-center w-full justify-between gap-[2rem]'>
        <div>
          <h3 className='text-[2.4rem] font-semibold'>{productInfoName}</h3>
          <p className='text-[1.8rem]'>마지막 편집 | {lastModified}</p>
        </div>
        {isPaid ? (
          <Link
            href={REVIEW_FORM_URL}
            target='_blank'
            className='opacity-100 hover:opacity-75 transition duration-300 ease-in-out w-[11rem] rounded-[0.4rem] text-[1.4rem] font-semibold bg-black_900 text-white_100 text-center py-[1rem]'
          >
            후기작성
          </Link>
        ) : (
          <Button className='w-[11rem]'>결제</Button>
        )}
      </div>
      <div className='flex gap-[1.1rem] items-center w-full justify-center'>
        <Link
          href={DOMAIN_URL.WEDDING_EDIT(tsid)}
          className='opacity-100 hover:bg-gray_900 transition duration-300 ease-in-out border bg-white_100 rounded-[0.4rem] text-black_900 w-[11rem] h-[4.2rem] flex justify-center items-center text-[1.4rem] font-semibold'
        >
          편집
        </Link>
        <Link
          href={DOMAIN_URL.WEDDING_PREVIEW(tsid)}
          className='opacity-100 hover:bg-gray_900 transition duration-300 ease-in-out border bg-white_100 rounded-[0.4rem] text-black_900 w-[11rem] h-[4.2rem] flex justify-center items-center text-[1.4rem] font-semibold'
        >
          미리보기
        </Link>
        {isPaid && (
          <Button
            className='border bg-white_100 text-black_900 w-[11rem]'
            onClick={handleShare}
          >
            링크공유
          </Button>
        )}
      </div>
    </li>
  );
};

export default MyInvitationItem;
