'use client';

import { ChangeEvent, useId, useRef } from 'react';

import { useUploadImageContext } from '../context';
import { UploadImageInputLabelProps } from './UploadImageInputLabel.type';

import { twJoin, twMerge } from 'tailwind-merge';

const UploadImageInputLabel = ({
  children,
  visible = true,
  multiple = false,
  className,
  ...rest
}: UploadImageInputLabelProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleUploadImage } = useUploadImageContext();
  const id = useId();

  const handleImageSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleUploadImage(event);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <label
        htmlFor={id}
        className={twMerge(
          twJoin(
            'cursor-pointer text-[1.6rem] font-medium ',
            !visible && 'hidden',
            visible && 'inline-flex',
            !multiple && 'text-pink_500 underline',
            multiple &&
              'items-center justify-center text-black_900 border border-solid rounded-[1rem] py-[1.6rem] px-[2.4rem]',
          ),
          className,
        )}
        {...rest}
      >
        {children}
      </label>
      <input
        id={id}
        ref={inputRef}
        type='file'
        accept='image/png, image/jpeg, image/avif, image/webp'
        multiple={multiple}
        className='hidden'
        onChange={handleImageSelectionChange}
      />
    </>
  );
};

export default UploadImageInputLabel;
