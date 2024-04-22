'use client';

import { useCallback, useState } from 'react';

import { UseToggleProps } from './useToggle.type';

const useToggle = ({ defaultValue = false }: UseToggleProps) => {
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
