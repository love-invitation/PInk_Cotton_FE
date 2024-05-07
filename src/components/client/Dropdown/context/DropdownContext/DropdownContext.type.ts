import { KeyboardEventHandler, MouseEvent, ReactNode } from 'react';

export interface DropdownContextProps {
  selectedValue: string;
  isVisible: boolean;
  handleValueChange: (event: MouseEvent<HTMLButtonElement>, newValue: string) => void;
  handleHideDropdown: () => void;
  handleToggleDropdown: () => void;
  handleDropdownKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

export interface DropdownContextProviderProps {
  defaultValue: string;
  onChange: (newValue: string) => void;
  className?: string;
  children: ReactNode;
}
