import { MouseEvent } from 'react';

import { CommonList } from '@/components/server';

import { useDropdownContext } from '../context/DropdownContext/DropdownContext';
import { DropdownListProps } from './DropdownList.type';

import { twJoin, twMerge } from 'tailwind-merge';

const DropdownList = ({ list, ulClassName, buttonClassName }: DropdownListProps) => {
  const { isToggle, handleValueChange } = useDropdownContext();

  return (
    <ul className={twMerge(twJoin(isToggle && 'block', !isToggle && 'hidden'), ulClassName)}>
      <CommonList data={list}>
        {(value) => {
          return (
            <li key={value}>
              <button
                type='button'
                className={twMerge(
                  'text-left w-full h-full hover:text-pink_500 px-[1.6rem] py-[1.2rem]',
                  buttonClassName,
                )}
                onClick={(event: MouseEvent<HTMLButtonElement>) => handleValueChange(event, value)}
              >
                {value}
              </button>
            </li>
          );
        }}
      </CommonList>
    </ul>
  );
};

export default DropdownList;
