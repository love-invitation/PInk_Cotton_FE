'use client';

import { useModal } from '@/hooks';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteGalleryProps } from './InviteGallery.type';
import { GalleryItem, GalleryModal } from './components';
import { useGalleryRoute } from './hooks';

import { twMerge } from 'tailwind-merge';

const InviteGallery = ({ galleryData }: InviteGalleryProps) => {
  const { isShowModal, closeModal, showModal } = useModal();
  const { handleClick, viewNumber } = useGalleryRoute({ onActive: showModal });

  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[6rem]')}>
      <h2 className={INVITE_STYLE.TITLE}>GALLERY</h2>

      <ul className='w-full px-[1.6rem] flex flex-wrap gap-[1rem] items-center justify-center'>
        {galleryData.galleries.map(({ imageUrl, priority }, index) => (
          <GalleryItem
            key={`galleryItem_${priority}`}
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
