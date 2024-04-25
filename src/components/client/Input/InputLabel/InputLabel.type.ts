import { HTMLAttributes, ReactNode } from 'react';

export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}
