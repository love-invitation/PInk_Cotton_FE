import React from 'react';

import { HTMLMotionProps } from 'framer-motion';

export type ButtonRadiusType = 'rounded' | '1.4rem' | '0.8rem' | '0.4rem';
export type ButtonBorderType = 'gray' | 'pink' | 'none';
export type ButtonFontSizeType = '2rem' | '1.8rem' | '1.4rem';
export type ButtonFontWeightType = 'regular' | 'semiBold' | 'bold' | 'extraBold';
export type ButtonFontColorType = 'white' | 'black' | 'brown' | 'gray';
export type ButtonBackgroundColorType = 'white' | 'black' | 'pink' | 'brown' | 'gray' | 'naked';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;

  radius?: ButtonRadiusType;

  fontSize?: ButtonFontSizeType;
  fontWeight?: ButtonFontWeightType;
  fontColor?: ButtonFontColorType;

  backgroundColor?: ButtonBackgroundColorType;

  border?: ButtonBorderType;
  shadow?: boolean;
}
