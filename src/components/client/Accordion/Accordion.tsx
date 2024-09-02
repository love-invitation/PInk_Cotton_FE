'use client';

import React from 'react';

import tailwindConfig from '@/../tailwind.config';
import { AccountFlowerIcon, ArrowDownIcon, Divider } from '@/components/server';
import { useToggle } from '@/hooks';

import CheckBox from '../CheckBox/CheckBox';
import { AccordionProps } from './Accordion.type';
import { useAccordionStyle, useGetElementHeight } from './hooks';

import resolveConfig from 'tailwindcss/resolveConfig';

const Accordion = ({
  children,
  buttonTitle,
  type = 'main',
  defaultToggleValue,
}: AccordionProps) => {
  const { isToggle, handleToggle } = useToggle(defaultToggleValue);
  const { ref, height } = useGetElementHeight();
  const { layoutStyle, buttonStyle, buttonInnerStyle, contentStyle } = useAccordionStyle({
    type,
    isToggle,
  });

  const { theme } = resolveConfig(tailwindConfig);

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
          {type === 'main' && <strong className='text-size18 leading-[2] font-semibold'>Q.</strong>}

          {type === 'account' && (
            <AccountFlowerIcon
              size='3rem'
              fill={theme.colors.brown_500}
            />
          )}

          {buttonTitle}
        </div>

        <ArrowDownIcon
          size='2rem'
          className={`transition-transform duration-500 ${isToggle && 'rotate-180'}`}
          fill={type === 'account' ? theme.colors.brown_500 : 'black'}
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
