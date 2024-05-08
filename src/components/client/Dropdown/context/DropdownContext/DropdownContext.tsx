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

import useClickAway from '@/hooks/useClickAway/useClickAway';

import { DropdownContextProps, DropdownContextProviderProps } from './DropdownContext.type';

import { twMerge } from 'tailwind-merge';

export const DropdownContext = createContext<DropdownContextProps>({
  selectedValue: '',
  isVisible: false,
  handleValueChange: () => {},
  handleHideDropdown: () => {},
  handleToggleDropdown: () => {},
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => setIsVisible(false));
  const onChangeRef = useRef(onChange);

  const handleValueChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>, newValue: string) => {
      onChangeRef.current(newValue);
      setSelectedValue(newValue);
      setIsVisible(false);
      event.stopPropagation();
    },
    [],
  );

  const handleHideDropdown = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleToggleDropdown = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const handleDropdownKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
    const { key } = event;

    if (key === 'ArrowUp') {
      setIsVisible(false);
    }

    if (key === 'ArrowDown') {
      setIsVisible(true);
    }
  }, []);

  const value = useMemo(
    () => ({
      selectedValue,
      isVisible,
      handleValueChange,
      handleHideDropdown,
      handleToggleDropdown,
      handleDropdownKeyDown,
    }),
    [
      handleDropdownKeyDown,
      handleHideDropdown,
      handleToggleDropdown,
      handleValueChange,
      isVisible,
      selectedValue,
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
        onClick={handleToggleDropdown}
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
