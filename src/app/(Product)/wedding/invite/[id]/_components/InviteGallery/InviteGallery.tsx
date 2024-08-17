'use client';

import { useCallback, useState } from 'react';

import { useModal } from '@/hooks';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteGalleryProps } from './InviteGallery.type';
import { GalleryItem, GalleryModal } from './components';

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
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[6rem]')}>
      <h2 className={INVITE_STYLE.TITLE}>GALLERY</h2>

      <ul className='w-full px-[1.6rem] flex flex-wrap gap-[1rem] items-center justify-center'>
        {galleryData.galleries.map(({ imageUrl, originFileName }, index) => (
          <GalleryItem
            key={`galleryItem_${originFileName}`}
            imageUrl={imageUrl}
            onClick={() => handleClick(index)}
          />
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
