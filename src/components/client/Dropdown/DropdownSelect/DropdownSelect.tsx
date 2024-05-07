import { useDropdownContext } from '../context/DropdownContext/DropdownContext';
import { DropdownSelectProps } from './DropdownSelect.type';

import { twMerge } from 'tailwind-merge';

const DropdownSelect = ({ className, ...rest }: DropdownSelectProps) => {
  const { selectedValue } = useDropdownContext();

  return (
    <button
      type='button'
      className={twMerge('text-left w-full h-full px-[1.6rem] py-[1.2rem]', className)}
      {...rest}
    >
      {selectedValue}
    </button>
  );
};

export default DropdownSelect;
