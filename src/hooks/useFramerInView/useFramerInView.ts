import { useRef } from 'react';

import { UseFramerInViewProps } from './useFramerInView.type';

import { useInView } from 'framer-motion';

const useFramerInView = <T extends HTMLElement = HTMLElement>(props: UseFramerInViewProps = {}) => {
  const { once = false } = props;

  const ref = useRef<T>(null);
  const inView = useInView(ref, { once });

  return {
    ref,
    inView,
  };
};

export default useFramerInView;
