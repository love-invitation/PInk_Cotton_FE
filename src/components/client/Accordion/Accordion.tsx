'use client';

import React from 'react';

import { ArrowDownIcon, Divider } from '@/components/server';
import { useToggle } from '@/hooks';

import CheckBox from '../CheckBox/CheckBox';
import { AccordionProps } from './Accordion.type';
import { useAccordionStyle, useGetElementHeight } from './hooks';

const Accordion = ({ children, buttonTitle, type = 'main' }: AccordionProps) => {
  const { isToggle, handleToggle } = useToggle();
  const { ref, height } = useGetElementHeight({ changeWatcher: children });
  const { layoutStyle, buttonStyle, buttonInnerStyle, contentStyle } = useAccordionStyle({ type });

  return (
    <article className={layoutStyle}>
      <button
        type='button'
        className={buttonStyle}
        onClick={handleToggle}
      >
        <div className={buttonInnerStyle}>
          {type === 'edit' && (
            <CheckBox
              checked={isToggle}
              className='pointer-events-none'
            />
          )}
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

        <div className={contentStyle}>{children}</div>
      </div>
    </article>
  );
};

export default Accordion;
