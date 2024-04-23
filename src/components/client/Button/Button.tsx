'use client';

import { ButtonProps } from './Button.type';
import { useConvertButtonStyle } from './hooks';

import { twJoin } from 'tailwind-merge';

const Button = ({ children, radius = '0.4rem' }: ButtonProps) => {
  const convertedStyle = useConvertButtonStyle({
    radius,
  });

  // const buttonStyle =

  return (
    <button
      className={twJoin(`bg-slate-700 w-[20rem] h-[4rem]`, convertedStyle)}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
