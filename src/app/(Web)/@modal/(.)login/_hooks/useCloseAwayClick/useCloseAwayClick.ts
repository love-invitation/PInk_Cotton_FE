'use client';

import { useRouter } from 'next/router';

import useClickAway from '@/hooks/useClickAway/useClickAway';

const useCloseAwayClick = () => {
  const route = useRouter();

  const ref = useClickAway<HTMLElement>(() => {
    route.back();
  });

  return ref;
};

export default useCloseAwayClick;
