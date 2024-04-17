'use client';

import { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { CenterIcon } from '@/components/server';
import { GeoPosition } from '@/types/originType';

import { PinkMapProps } from './PinkMap.type';

import { debounce, throttle } from 'lodash';

const PinkMap = ({ center }: PinkMapProps) => {
  const [outCenterPosition, setOutCenterPosition] = useState<GeoPosition>({ lat: 0, lng: 0 });
  const [isOutCenter, setIsOutCenter] = useState(false);

  const offIsOutCenter = useRef(
    debounce(() => {
      setIsOutCenter(false);
    }, 2000),
  ).current;

  const handleMap = useRef(
    throttle((target: kakao.maps.Map) => {
      setIsOutCenter(true);

      const currentCenter = target.getCenter();
      setOutCenterPosition({
        lat: currentCenter.getLat(),
        lng: currentCenter.getLng(),
      });

      offIsOutCenter();
    }, 200),
  ).current;

  return (
    <article className='relative h-dvh w-dvw'>
      <Map
        className='relative z-[0] h-dvh w-dvw'
        center={isOutCenter ? outCenterPosition : center}
        onCenterChanged={handleMap}
        isPanto
      >
        <MapMarker position={center} />
      </Map>

      <button
        className='absolute bottom-4 right-4 z-[1] flex h-[4rem] w-[4rem] items-center justify-center rounded-radius4 bg-white_100 opacity-90 shadow-shadow_700 transition-opacity hover:opacity-40'
        type='button'
        aria-label='Center'
        onClick={() => setIsOutCenter(false)}
      >
        <CenterIcon />
      </button>
    </article>
  );
};

export default PinkMap;
