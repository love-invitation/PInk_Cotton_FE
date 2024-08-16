import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { UseGalleryMovingProps } from './useGalleryMoving.type';

const useGalleryMoving = ({ viewNumber, maxIndex }: UseGalleryMovingProps) => {
  const [viewIndex, setViewIndex] = useState(viewNumber);
  const route = useRouter();

  const handleClickPrev = useCallback(() => {
    setViewIndex((index) => {
      const nextIndex = index - 1 >= 0 ? index - 1 : 0;
      return nextIndex;
    });
  }, []);

  const handleClickNext = useCallback(() => {
    const maxLength = maxIndex;

    setViewIndex((index) => {
      const nextIndex = index + 1 <= maxLength ? index + 1 : maxLength;
      return nextIndex;
    });
  }, [maxIndex]);

  useEffect(() => {
    route.push(`#photo_${viewIndex}`);
  }, [viewIndex, route]);

  return {
    handleClickPrev,
    handleClickNext,
  };
};

export default useGalleryMoving;
