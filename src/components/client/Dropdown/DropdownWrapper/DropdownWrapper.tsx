'use client';

import DropdownList from '../DropdownList/DropdownList';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import { DropdownContextProvider } from '../context/DropdownContext/DropdownContext';
import { DropdownWrapperProps } from './DropdownWrapper.type';

const DropdownWrapper = ({ defaultValue, onChange, children, className }: DropdownWrapperProps) => {
  return (
    <DropdownContextProvider
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    >
      {children}
    </DropdownContextProvider>
  );
};

DropdownWrapper.Select = DropdownSelect;
DropdownWrapper.List = DropdownList;

export default DropdownWrapper;
