'use client';

import { useRef, useState } from 'react';

import { GeoPosition } from '@/types/originType';

import { debounce, throttle } from 'lodash';

const useMapAutoReturn = () => {
  const [outCenterPosition, setOutCenterPosition] = useState<GeoPosition>({ lat: 0, lng: 0 });
  const [isOutCenter, setIsOutCenter] = useState(false);

  const offIsOutCenter = useRef(
    debounce(() => {
      setIsOutCenter(false);
    }, 2000),
  ).current;

  const handleChangeCenter = useRef(
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

  const handleOffOutCenter = () => {
    setIsOutCenter(false);
  };

  return {
    handleChangeCenter,
    handleOffOutCenter,
    isOutCenter,
    outCenterPosition,
  };
};

export default useMapAutoReturn;
