import { ReactNode } from 'react';

export interface DropdownWrapperProps {
  defaultValue: string;
  onChange: (newValue: string) => void;
  children: ReactNode;
  className?: string;
}
