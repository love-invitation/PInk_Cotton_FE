'use client';

import { ButtonProps } from './Button.type';
import { useConvertButtonStyle } from './hooks';

import { twJoin } from 'tailwind-merge';

const Button = ({
  children,
  radius = '0.4rem',
  fontSize = '1.4rem',
  fontWeight = 'semiBold',
  fontColor = 'white',
  backgroundColor = 'pink',
  border = 'none',
  shadow = false,
}: ButtonProps) => {
  const convertedStyle = useConvertButtonStyle({
    radius,
    fontSize,
    fontWeight,
    fontColor,
    backgroundColor,
    border,
    shadow,
  });

  // const buttonStyle =

  return (
    <button
      className={twJoin(`w-full h-[4.2rem]`, convertedStyle)}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
