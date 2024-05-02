import { ReactNode } from 'react';

export interface CommonListProps<T> {
  data: T[];
  className?: string;
  children: (data: T, index: number) => ReactNode;
}
