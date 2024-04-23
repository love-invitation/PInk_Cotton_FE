import { HTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}
