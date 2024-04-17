'use client';

import { Map } from 'react-kakao-maps-sdk';

import { PinkMapProps } from './PinkMap.type';

const PinkMap = ({ center }: PinkMapProps) => {
  return (
    <Map
      className='h-dvh w-dvw'
      center={center}
    />
  );
};

export default PinkMap;
