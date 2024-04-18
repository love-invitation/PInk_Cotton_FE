'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { CenterIcon } from '@/components/server';

import { PinkMapProps } from './PinkMap.type';
import { useMapAutoReturn } from './hooks';

const PinkMap = ({ center, width = '100%', height = '100%' }: PinkMapProps) => {
  const { isOutCenter, outCenterPosition, handleChangeCenter, handleOffOutCenter } =
    useMapAutoReturn();

  return (
    <article
      className='relative'
      style={{
        width,
        height,
      }}
    >
      <Map
        className='relative z-[0] h-full w-full'
        center={isOutCenter ? outCenterPosition : center}
        onCenterChanged={handleChangeCenter}
        isPanto
      >
        <MapMarker position={center} />
      </Map>

      <button
        className='absolute bottom-4 right-4 z-[1] flex h-[4rem] w-[4rem] items-center justify-center rounded-radius4 bg-white_100 opacity-90 shadow-shadow_700 transition-opacity hover:opacity-40'
        type='button'
        aria-label='Center'
        onClick={handleOffOutCenter}
      >
        <CenterIcon />
      </button>
    </article>
  );
};

export default PinkMap;
