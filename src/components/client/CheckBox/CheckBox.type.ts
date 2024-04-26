import { HTMLAttributes } from 'react';

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  size?: number;
  className?: string;
  disabled?: boolean;

  id?: string;

  type?: 'checkBox';
}
