import {
  KeyboardEventHandler,
  MouseEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useToggle } from '@/hooks';
import useClickAway from '@/hooks/useClickAway/useClickAway';

import { DropdownContextProps, DropdownContextProviderProps } from './DropdownContext.type';

import { twMerge } from 'tailwind-merge';

export const DropdownContext = createContext<DropdownContextProps>({
  selectedValue: '',
  isToggle: false,
  handleValueChange: () => {},
  handleSetFalse: () => {},
  handleToggle: () => {},
  handleDropdownKeyDown: () => {},
});

export const useDropdownContext = () => useContext(DropdownContext);

export const DropdownContextProvider = ({
  defaultValue,
  onChange,
  children,
  className,
}: DropdownContextProviderProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { isToggle, handleToggle, handleSetTrue, handleSetFalse } = useToggle(false);
  const ref = useClickAway<HTMLDivElement>(handleSetFalse);
  const onChangeRef = useRef(onChange);

  const handleValueChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>, newValue: string) => {
      onChangeRef.current(newValue);
      setSelectedValue(newValue);
      handleSetFalse();
      event.stopPropagation();
    },
    [handleSetFalse],
  );

  const handleDropdownKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      const { key } = event;

      if (key === 'ArrowUp') {
        handleSetFalse();
      }

      if (key === 'ArrowDown') {
        handleSetTrue();
      }
    },
    [handleSetFalse, handleSetTrue],
  );

  const value = useMemo(
    () => ({
      selectedValue,
      isToggle,
      handleValueChange,
      handleSetFalse,
      handleToggle,
      handleDropdownKeyDown,
    }),
    [
      selectedValue,
      isToggle,
      handleValueChange,
      handleSetFalse,
      handleToggle,
      handleDropdownKeyDown,
    ],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  return (
    <DropdownContext.Provider value={value}>
      <div
        ref={ref}
        role='button'
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleDropdownKeyDown}
        className={twMerge(
          'text-gray_400 text-[1.6rem] border rounded-[1rem] border-gray_800',
          className,
        )}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
