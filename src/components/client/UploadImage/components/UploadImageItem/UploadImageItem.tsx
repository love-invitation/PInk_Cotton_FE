import { useContext } from 'react';

import Image from 'next/image';

import { CloseIcon } from '@/components/server';

import { UploadImageContext } from '../../context/UploadImageContext/UploadImageContext';
import { UploadImageItemProps } from './UploadImageItem.type';

const UploadImageItem = ({ image, ...rest }: UploadImageItemProps) => {
  const { handleRemoveImage } = useContext(UploadImageContext);

  return (
    <>
      <Image
        src={URL.createObjectURL(image)}
        fill
        objectFit='cover'
        objectPosition='center'
        className='border-0 rounded-[0.5rem]'
        {...rest}
      />

      <button
        type='button'
        aria-label='업로드 사진 삭제'
        onClick={() => handleRemoveImage(image)}
        className='absolute z-icon border-0 right-0 top-0 rounded-[0.5rem] bg-white_100 bg-opacity-50 hover:bg-opacity-30'
      >
        <CloseIcon size={24} />
      </button>
    </>
  );
};

export default UploadImageItem;
