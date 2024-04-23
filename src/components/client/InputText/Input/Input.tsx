'use client';

import { useFormContext } from 'react-hook-form';

import { InputProps } from './Input.type';

import { twMerge } from 'tailwind-merge';

const Input = ({ className, registerOptions, ...rest }: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      type='text'
      className={twMerge(
        'h-[4.8rem] w-full rounded-radius10 border border-solid border-placeholder_100 px-[2.4rem] py-[1.6rem] text-[1.6rem] font-medium',
        className,
      )}
      {...(rest.name ? register(rest.name, registerOptions) : {})}
      {...rest}
    />
  );
};

export default Input;
