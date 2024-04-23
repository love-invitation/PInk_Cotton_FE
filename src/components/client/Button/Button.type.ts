export type ButtonRadiusType = 'rounded' | '1.4rem' | '0.8rem' | '0.4rem';
export type ButtonBorderType = 'gray' | 'pink' | 'deep_gray';
export type ButtonFontSizeType = '2rem' | '1.8rem' | '1.4rem';

export interface ButtonProps {
  children: React.ReactNode;

  radius?: ButtonRadiusType;

  border?: ButtonBorderType;
  shadow?: boolean;
  fontSize?: ButtonFontSizeType;

  height?: number;
  width?: number;
}
