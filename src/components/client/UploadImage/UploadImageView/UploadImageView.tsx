'use client';

import { useContext } from 'react';

import UploadImageItem from '../components/UploadImageItem/UploadImageItem';
import { UploadImageContext } from '../context/UploadImageContext/UploadImageContext';
import { UploadImageViewProps } from './UploadImageView.type';

import { twMerge } from 'tailwind-merge';

const UploadImageView = ({ className, ...rest }: UploadImageViewProps) => {
  const { images } = useContext(UploadImageContext);
  const style = twMerge(
    'relative w-[10rem] h-[10rem] hover:scale-110 transition-transform',
    className,
  );

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={style}>
      <UploadImageItem
        image={images[0]}
        {...rest}
      />
    </div>
  );
};

export default UploadImageView;
