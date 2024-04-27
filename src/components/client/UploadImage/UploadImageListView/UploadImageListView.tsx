'use client';

import { useContext } from 'react';

import UploadImageItem from '../components/UploadImageItem/UploadImageItem';
import { UploadImageContext } from '../context/UploadImageContext/UploadImageContext';
import { UploadImageListViewProps } from './UploadImageListView.type';

import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

const UploadImageListView = ({ ulClassName, liClassName, ...rest }: UploadImageListViewProps) => {
  const { images } = useContext(UploadImageContext);
  const ulStyle = twMerge(
    'flex gap-2 w-[56.4rem] h-[39.4rem] border rounded-[1rem] border-gray_500 py-[2.4rem] px-[1.6rem]',
    ulClassName,
  );
  const liStyle = twMerge(
    'relative w-[10rem] h-[10rem] hover:scale-110 transition-transform',
    liClassName,
  );

  return (
    <ul className={ulStyle}>
      {images.map((image) => {
        return (
          <li
            key={uuidv4()}
            className={liStyle}
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
