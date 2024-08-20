'use client';

import { useMemo } from 'react';

import Link from 'next/link';

import { PretendardFont } from '@/assets/font';
import { KakaoMapLogoIcon, NaverMapLogoIcon } from '@/components/server';

import { LocationActionsProps } from './LocationActions.type';

const LocationActions = ({ lng, lat, placeName }: LocationActionsProps) => {
  const NAV_LIST = useMemo(
    () => [
      {
        key: 'naver',
        buttonName: '네이버 지도',
        logoIcon: <NaverMapLogoIcon size='2rem' />,
        href: `https://map.naver.com/?lng=${lng}&lat=${lat}&title=${placeName}`,
      },

      {
        key: 'kakao',
        buttonName: '카카오 지도',
        logoIcon: <KakaoMapLogoIcon size='2rem' />,
        href: `https://map.kakao.com/link/to/${placeName},${lat},${lng}`,
      },
    ],
    [lat, lng, placeName],
  );

  return (
    <div className='w-[90%] flex flex-col gap-[1rem]'>
      <p className=' text-size12'>아래 버튼을 누르면 앱에서 길안내가 시작됩니다.</p>

      <ul className='w-full flex gap-[1rem]'>
        {NAV_LIST.map(({ key, buttonName, logoIcon, href }) => (
          <li
            key={key}
            className='flex-grow-[1]'
          >
            <Link
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className={`${PretendardFont.className} h-[4.2rem] w-full border-[0.1rem] border-gray_700 rounded-radius6 flex items-center justify-center gap-[0.6rem] text-size14 text-nowrap font-medium`}
            >
              {logoIcon}
              {buttonName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationActions;
