'use client';

import { useEffect, useRef } from 'react';

import { UseScrollMoveProps } from './useScrollMove.type';

const useScrollMove = ({ target }: UseScrollMoveProps) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const element = document.querySelector(target);

    if (!element) {
      return;
    }

    ref.current = element;
  }, [target]);

  const handleMoveScroll = () => {
    const element = ref.current;
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return { ref, handleMoveScroll };
};

export default useScrollMove;
