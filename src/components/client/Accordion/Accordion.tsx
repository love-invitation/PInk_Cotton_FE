'use client';

import React from 'react';

import { ArrowDownIcon, Divider } from '@/components/server';
import { useToggle } from '@/hooks';

import { AccordionProps } from './Accordion.type';
import useGetElementHeight from './hooks/useGetElementHeight';

import { twJoin } from 'tailwind-merge';

const Accordion = ({ children, buttonTitle, type = 'main' }: AccordionProps) => {
  const { isToggle, handleToggle } = useToggle();
  const { ref, height } = useGetElementHeight({ changeWatcher: children });

  return (
    <article
      className={twJoin(
        'w-full overflow-hidden',
        type === 'main' && 'max-w-[55rem]',
        type === 'edit' && 'max-w-[73rem] rounded-radius10 shadow-shadow_500',
      )}
    >
      <button
        type='button'
        className={twJoin(
          'flex w-full select-none items-center',
          type === 'edit' && 'h-[6rem] px-[2.4rem] text-size15 font-semibold',
          type === 'main' && 'h-[8rem] text-size15 font-semibold',
        )}
        onClick={handleToggle}
      >
        <div
          className={twJoin(
            'flex flex-1 items-center',
            type === 'main' && 'gap-1 pl-[1rem]',
            type === 'edit' && 'gap-2',
          )}
        >
          {type === 'edit' && <div className='h-[2rem] w-[2rem] bg-black' />}
          {type === 'main' && <strong className='text-size18 font-medium leading-[2]'>Q.</strong>}

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
        {type === 'edit' && <Divider />}
        <div
          className={twJoin(
            'w-full pb-2',
            type === 'edit' && 'px-[2.4rem]',
            type === 'main' && 'px-[1rem]',
          )}
        >
          {children}
        </div>
      </div>
    </article>
  );
};

export default Accordion;
