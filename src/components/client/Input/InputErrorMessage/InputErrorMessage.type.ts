import { HTMLAttributes, ReactNode } from 'react';

export interface InputErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}
