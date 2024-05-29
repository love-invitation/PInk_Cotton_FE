import { useEffect, useRef, useState } from 'react';

const useGetTemplateWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const layoutElement = ref.current;

    if (!layoutElement) {
      return;
    }

    setWidth(layoutElement.getBoundingClientRect().width);
  }, []);

  return {
    ref,
    width,
  };
};

export default useGetTemplateWidth;
