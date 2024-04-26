'use client';

import { useId } from 'react';

import { CheckIcon } from '@/components/server';

import { CheckBoxProps } from './CheckBox.type';

import { motion } from 'framer-motion';
import { twJoin, twMerge } from 'tailwind-merge';

const CheckBox = ({
  checked = false,
  className = '',
  size = 20,
  type = 'checkBox',
  disabled = false,
  id = '',
  ...rest
}: CheckBoxProps) => {
  const inputId = useId();
  const checkedStyle = checked ? 'bg-black_900' : 'bg-gray_600';
  const disabledStyle = disabled ? 'opacity-40' : 'hover:brightness-75';

  return (
    <>
      <input
        id={id || inputId}
        style={{ display: 'none' }}
        {...rest}
        checked={checked}
        type={type}
        disabled={disabled}
        readOnly={!rest.onChange}
      />
      <motion.label
        htmlFor={id || inputId}
        className={twMerge(
          twJoin('block rounded-[0.5rem] cursor-pointer', checkedStyle, disabledStyle),
          className,
        )}
        style={{
          width: `${size * 0.1}rem`,
          height: `${size * 0.1}rem`,
        }}
        whileTap={disabled ? {} : { scale: 0.9, opacity: 0.6 }}
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
