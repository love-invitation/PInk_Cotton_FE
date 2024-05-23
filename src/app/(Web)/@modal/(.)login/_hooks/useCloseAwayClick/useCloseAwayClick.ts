'use client';

import { useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';

import useClickAway from '@/hooks/useClickAway/useClickAway';

const useCloseAwayClick = () => {
  const route = useRouter();
  const [isExit, setIsExit] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsExit(true);
  });

  const handleBackRoute = useCallback(() => {
    route.back();
  }, [route]);

  return { ref, isExit, handleBackRoute };
};

export default useCloseAwayClick;
