'use client';

import React, { MouseEvent } from 'react';

import { ButtonProps } from './Button.type';
import { useConvertButtonStyle } from './hooks';

import { motion } from 'framer-motion';
import { twJoin, twMerge } from 'tailwind-merge';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      radius = '0.4rem',
      fontSize = '1.4rem',
      fontWeight = 'semiBold',
      fontColor = 'white',
      backgroundColor = 'pink',
      border = 'none',
      shadow = false,
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const convertedStyle = useConvertButtonStyle({
      radius,
      fontSize,
      fontWeight,
      fontColor,
      backgroundColor,
      border,
      shadow,
    });

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!onClick) {
        return;
      }

      onClick();
    };

    return (
      <motion.button
        ref={ref}
        className={twMerge(
          twJoin(`w-full h-[4.2rem] px-2 will-change-transform`, convertedStyle),
          className,
        )}
        type='button'
        onClick={handleClick}
        whileTap={{ scale: 0.97, opacity: 0.8 }}
        whileHover={{ filter: 'brightness(94%)' }}
        transition={{ duration: 0.25 }}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);

export default Button;
