'use client';

import { useCallback, useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [isToggle, setIsToggle] = useState(defaultValue);

  const handleToggle = useCallback(() => {
    setIsToggle((prevState) => !prevState);
  }, []);

  return {
    isToggle,
    handleToggle,
  };
};

export default useToggle;
