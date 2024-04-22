'use client';

import { useEffect, useRef, useState } from 'react';

import { UseGetElementHeightProps } from './useGetElementHeight.type';

const useGetElementHeight = ({ changeWatcher }: UseGetElementHeightProps) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }

    setHeight(current.scrollHeight);
  }, [changeWatcher]);

  return { ref, height };
};

export default useGetElementHeight;
