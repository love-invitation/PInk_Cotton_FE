'use client';

import { useCallback, useState } from 'react';

import Image from 'next/image';

import { useModal } from '@/hooks';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteGalleryProps } from './InviteGallery.type';
import { GalleryModal } from './components';

import { twMerge } from 'tailwind-merge';

const InviteGallery = ({ galleryData }: InviteGalleryProps) => {
  const [viewNumber, setViewNumber] = useState(0);
  const { isShowModal, closeModal, showModal } = useModal();

  const handleClick = useCallback(
    (index: number) => {
      setViewNumber(index);
      showModal();
    },
    [showModal],
  );

  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[6rem] border-2 border-red-500')}>
      <h2 className={INVITE_STYLE.TITLE}>GALLERY</h2>

      <ul className='w-full px-[1.6rem] flex flex-wrap gap-[1rem] items-center justify-center'>
        {galleryData.galleries.map(({ imageUrl, originFileName }, index) => (
          <li
            key={originFileName}
            className='relative w-[12rem] h-[12rem] border-2 border-red-500'
          >
            <button
              type='button'
              className='w-full h-full relative'
              onClick={() => handleClick(index)}
            >
              <Image
                src={imageUrl}
                fill
                className='object-contain'
                sizes='100%, 100%'
                priority
                alt={`gallery_image_${originFileName}`}
              />
            </button>
          </li>
        ))}
      </ul>

      {isShowModal && (
        <GalleryModal
          isShow={isShowModal}
          onClose={closeModal}
          viewNumber={viewNumber}
          galleryList={galleryData.galleries}
        />
      )}
    </article>
  );
};

export default InviteGallery;
