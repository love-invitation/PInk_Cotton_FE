'use client';

import { ButtonProps } from './Button.type';
import { useConvertButtonStyle } from './hooks';

import { twJoin } from 'tailwind-merge';

const Button = ({
  children,
  radius = '0.4rem',
  fontSize = '1.4rem',
  fontWeight = 'semiBold',
}: ButtonProps) => {
  const convertedStyle = useConvertButtonStyle({
    radius,
    fontSize,
    fontWeight,
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
