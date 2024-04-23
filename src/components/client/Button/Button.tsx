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
}: ButtonProps) => {
  const convertedStyle = useConvertButtonStyle({
    radius,
    fontSize,
    fontWeight,
    fontColor,
    backgroundColor,
  });

  // const buttonStyle =

  return (
    <button
      className={twJoin(`w-[20rem] h-[4rem]`, convertedStyle)}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
