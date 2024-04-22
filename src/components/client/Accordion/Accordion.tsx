'use client';

import React from 'react';

import { ArrowDownIcon, Divider } from '@/components/server';
import { useToggle } from '@/hooks';

import useGetElementHeight from './hooks/useGetElementHeight';

interface TestProps {
  children: React.ReactNode;
  buttonTitle: string;
}

const Accordion = ({ children, buttonTitle }: TestProps) => {
  const { isToggle, handleToggle } = useToggle();
  const { ref, height } = useGetElementHeight({ changeWatcher: children });

  return (
    <article className='w-full max-w-[73rem] overflow-hidden rounded-radius10 shadow-shadow_500'>
      <button
        type='button'
        className='flex h-[6rem] w-full select-none items-center px-[2.4rem] text-size15 font-semibold'
        onClick={handleToggle}
      >
        <div className='flex flex-1 items-center gap-2'>
          <div className='h-[2rem] w-[2rem] bg-black' />
          {buttonTitle}
        </div>

        <ArrowDownIcon
          size={20}
          className={`transition-transform duration-500 ${isToggle && 'rotate-180'}`}
        />
      </button>

      <div
        className='transition-max-height w-full duration-500'
        ref={ref}
        style={{
          maxHeight: isToggle ? `${height}px` : '0px',
        }}
      >
        <Divider />
        <div className='px-[2.4rem] py-2'>{children}</div>
      </div>
    </article>
  );
};

export default Accordion;
