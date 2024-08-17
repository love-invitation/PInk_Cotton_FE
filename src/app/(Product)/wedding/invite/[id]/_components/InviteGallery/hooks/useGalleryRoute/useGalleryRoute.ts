import { useCallback, useState } from 'react';

import { UseGalleryRouteProps } from './useGalleryRoute.type';

const useGalleryRoute = ({ onActive }: UseGalleryRouteProps) => {
  const [viewNumber, setViewNumber] = useState(0);

  const handleClick = useCallback(
    (index: number) => {
      setViewNumber(index);
      onActive();
    },
    [onActive],
  );

  return {
    viewNumber,
    handleClick,
  };
};

export default useGalleryRoute;
