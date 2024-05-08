import { KeyboardEventHandler, MouseEvent, ReactNode } from 'react';

export interface DropdownContextProps {
  selectedValue: string;
  isToggle: boolean;
  handleValueChange: (event: MouseEvent<HTMLButtonElement>, newValue: string) => void;
  handleSetFalse: () => void;
  handleToggle: () => void;
  handleDropdownKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

export interface DropdownContextProviderProps {
  defaultValue: string;
  onChange: (newValue: string) => void;
  className?: string;
  children: ReactNode;
}
