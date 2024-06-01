import Image from 'next/image';

import { CloseIcon } from '@/components/server';

import { useUploadImageContext } from '../../context/UploadImageContext/UploadImageContext';
import { UploadImageItemProps } from './UploadImageItem.type';

const UploadImageItem = ({ image, ...rest }: UploadImageItemProps) => {
  const { handleRemoveImage } = useUploadImageContext();

  return (
    <>
      <Image
        src={URL.createObjectURL(image)}
        className='border-0 rounded-[0.5rem]'
        {...rest}
      />

      <button
        type='button'
        aria-label='업로드 사진 삭제'
        onClick={() => handleRemoveImage(image)}
        className='absolute z-icon border-0 right-0 top-0 rounded-[0.5rem] bg-white_100 bg-opacity-50 hover:bg-opacity-30'
      >
        <CloseIcon size='2.4rem' />
      </button>
    </>
  );
};

export default UploadImageItem;
