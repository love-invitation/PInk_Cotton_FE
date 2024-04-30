'use client';

import { UploadImageItem } from '../components';
import { useUploadImageContext } from '../context';
import { UploadImageListViewProps } from './UploadImageListView.type';

import { twMerge } from 'tailwind-merge';

const UploadImageListView = ({ ulClassName, liClassName, ...rest }: UploadImageListViewProps) => {
  const { images } = useUploadImageContext();

  return (
    <ul
      className={twMerge(
        'flex gap-2 w-[56.4rem] h-[39.4rem] border rounded-[1rem] border-gray_500 py-[2.4rem] px-[1.6rem]',
        ulClassName,
      )}
    >
      {images.map((image) => {
        return (
          <li
            key={image.lastModified}
            className={twMerge(
              'relative w-[10rem] h-[10rem] hover:scale-110 transition-transform',
              liClassName,
            )}
          >
            <UploadImageItem
              image={image}
              {...rest}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default UploadImageListView;
