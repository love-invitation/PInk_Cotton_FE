'use client';

import { useId } from 'react';

import { CheckIcon } from '@/components/server';

import { CheckBoxProps } from './CheckBox.type';

import { motion } from 'framer-motion';
import { twJoin, twMerge } from 'tailwind-merge';

const CheckBox = ({ checked = false, className = '', size = 20, ...rest }: CheckBoxProps) => {
  const inputId = useId();
  const checkedStyle = checked ? 'bg-black_900' : 'bg-gray_600';

  return (
    <>
      <input
        id={inputId}
        type='checkbox'
        checked={checked}
        style={{ display: 'none' }}
        {...rest}
      />
      <motion.label
        htmlFor={inputId}
        className={twMerge(
          twJoin('block rounded-[0.5rem] cursor-pointer hover:brightness-75', checkedStyle),
          className,
        )}
        style={{
          width: `${size * 0.1}rem`,
          height: `${size * 0.1}rem`,
        }}
        whileTap={{ scale: 0.9, opacity: 0.6 }}
      >
        <CheckIcon
          fill='white'
          size='100%'
        />
      </motion.label>
    </>
  );
};

export default CheckBox;
