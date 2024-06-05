import { useEffect, useRef, useState } from 'react';

const useGetTemplateWidth = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const layoutElement = ref.current;

    if (!layoutElement) {
      return;
    }

    const handleResize = () => {
      setWidth(layoutElement.getBoundingClientRect().width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ref,
    width,
  };
};

export default useGetTemplateWidth;
