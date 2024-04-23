import { HTMLAttributes, ReactNode } from 'react';

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}
