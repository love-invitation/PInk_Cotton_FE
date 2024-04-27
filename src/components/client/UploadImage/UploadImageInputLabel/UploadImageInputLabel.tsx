'use client';

import { useContext, useId } from 'react';

import { UploadImageContext } from '../context/UploadImageContext/UploadImageContext';
import { UploadImageInputLabelProps } from './UploadImageInputLabel.type';

import { twJoin, twMerge } from 'tailwind-merge';

const UploadImageInputLabel = ({
  children,
  visible = true,
  multiple = false,
  className,
  ...rest
}: UploadImageInputLabelProps) => {
  const { handleUploadImage } = useContext(UploadImageContext);
  const id = useId();
  const baseStyle = twJoin(
    'cursor-pointer text-[1.6rem] font-medium ',
    !visible && 'hidden',
    visible && 'inline-flex',
    !multiple && 'text-pink_500 underline',
    multiple &&
      'items-center justify-center text-black_900 border border-solid rounded-[1rem] py-[1.6rem] px-[2.4rem]',
  );
  const style = twMerge(baseStyle, className);

  return (
    <>
      <label
        htmlFor={id}
        className={style}
        {...rest}
      >
        {children}
      </label>
      <input
        id={id}
        type='file'
        accept='image/png, image/jpeg, image/avif, image/webp'
        multiple={multiple}
        className='hidden'
        onChange={handleUploadImage}
      />
    </>
  );
};

export default UploadImageInputLabel;
