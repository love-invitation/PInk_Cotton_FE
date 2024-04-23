import { HTMLAttributes, ReactNode } from 'react';

export interface InputTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
