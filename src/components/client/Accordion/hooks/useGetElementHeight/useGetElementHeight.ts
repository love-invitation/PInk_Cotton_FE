'use client';

import { useEffect, useRef, useState } from 'react';

const useGetElementHeight = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { current } = ref;

    if (!current) {
      return;
    }
    setHeight(current.scrollHeight);

    const observe = new MutationObserver(() => {
      setHeight(current.scrollHeight);
    });

    observe.observe(current, {
      childList: true,
      subtree: true,
    });

    return () => {
      observe.disconnect();
    };
  }, []);

  return { ref, height };
};

export default useGetElementHeight;
