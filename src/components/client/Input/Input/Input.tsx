'use client';

import { useFormContext } from 'react-hook-form';

import { InputProps } from './Input.type';

import { twMerge } from 'tailwind-merge';

const Input = ({ type = 'text', name, className, registerOptions, ...rest }: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      type={type}
      className={twMerge(
        'focus:border-pink_300 focus:border-2 h-[4.8rem] w-full rounded-radius10 border border-solid border-placeholder_100 px-[2.4rem] py-[1.6rem] text-[1.6rem] font-medium',
        className,
      )}
      {...register(name, registerOptions)}
      {...rest}
    />
  );
};

export default Input;
