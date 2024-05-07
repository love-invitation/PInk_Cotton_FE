import { useDropdownContext } from '../context/DropdownContext/DropdownContext';
import { DropdownSelectProps } from './DropdownSelect.type';

import { twMerge } from 'tailwind-merge';

const DropdownSelect = ({ className, ...rest }: DropdownSelectProps) => {
  const { selectedValue } = useDropdownContext();

  return (
    <p
      className={twMerge('text-left h-full px-[1.6rem] py-[1.2rem]', className)}
      {...rest}
    >
      {selectedValue}
    </p>
  );
};

export default DropdownSelect;
