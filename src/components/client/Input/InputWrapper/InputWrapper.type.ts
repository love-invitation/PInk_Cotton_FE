import { HTMLAttributes, ReactNode } from 'react';

export interface InputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
