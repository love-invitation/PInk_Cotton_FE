'use client';

import { useCallback, useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [isToggle, setIsToggle] = useState(defaultValue);

  const handleToggle = useCallback(() => {
    setIsToggle((prevState) => !prevState);
  }, []);

  const handleSetTrue = useCallback(() => {
    setIsToggle(true);
  }, []);

  const handleSetFalse = useCallback(() => {
    setIsToggle(false);
  }, []);

  return {
    isToggle,
    handleToggle,
    handleSetTrue,
    handleSetFalse,
  };
};

export default useToggle;
