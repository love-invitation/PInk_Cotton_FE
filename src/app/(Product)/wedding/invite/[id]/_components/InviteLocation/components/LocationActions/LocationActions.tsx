'use client';

import { useMemo } from 'react';

import { PretendardFont } from '@/assets/font';
import { Button } from '@/components/client';
import { KakaoMapLogoIcon, NaverMapLogoIcon, TMapLogoIcon } from '@/components/server';

const LocationActions = () => {
  const NAV_LIST = useMemo(
    () => [
      {
        key: 'naver',
        buttonName: '네이버지도',
        logoIcon: <NaverMapLogoIcon size='2rem' />,
        onClick: () => {},
      },
      {
        key: 'TMap',
        buttonName: '티맵',
        logoIcon: <TMapLogoIcon size='2rem' />,
        onClick: () => {},
      },
      {
        key: 'kakao',
        buttonName: '카카오내비',
        logoIcon: <KakaoMapLogoIcon size='2rem' />,
        onClick: () => {},
      },
    ],
    [],
  );

  return (
    <div className='w-[90%] flex flex-col gap-[1rem]'>
      <p className=' text-size12'>아래 버튼을 누르면 앱에서 길안내가 시작됩니다.</p>

      <ul className='w-full flex gap-[1rem]'>
        {NAV_LIST.map(({ key, buttonName, logoIcon, onClick }) => (
          <li
            key={key}
            className='flex-grow-[1]'
          >
            <Button
              backgroundColor='naked'
              fontColor='black'
              border='gray'
              fontWeight='regular'
              className={`${PretendardFont.className} h-[3.6rem] m-0 p-0 w-full flex items-center justify-center gap-[0.6rem] text-size12 text-nowrap font-medium`}
              onClick={onClick}
            >
              {logoIcon}
              {buttonName}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 카카오 https://map.kakao.com/link/to/weddingPlace,37.498454033368,127.03229336072

export default LocationActions;
