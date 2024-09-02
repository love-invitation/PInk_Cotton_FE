'use client';

import { useFramerInView, useModal } from '@/hooks';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { INVITE_STYLE } from '../../Invite.style';
import { InviteGalleryProps } from './InviteGallery.type';
import { GalleryItem, GalleryModal } from './components';
import { useGalleryRoute } from './hooks';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const InviteGallery = ({ galleryData }: InviteGalleryProps) => {
  const { isShowModal, closeModal, showModal } = useModal();
  const { handleClick, viewNumber } = useGalleryRoute({ onActive: showModal });
  const { ref, inView } = useFramerInView<HTMLHeadingElement>({ once: true });

  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[6rem]')}>
      <motion.h2
        ref={ref}
        className={INVITE_STYLE.TITLE}
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={INVITE_ANIMATION.DURATION}
      >
        GALLERY
      </motion.h2>

      <ul className='w-full px-[1.6rem] flex flex-wrap gap-[1rem] items-center justify-center'>
        {galleryData.galleries.map(({ imageUrl, priority }, index) => (
          <GalleryItem
            key={`galleryItem_${priority}`}
            imageUrl={imageUrl}
            onClick={() => handleClick(index)}
            isInView={inView}
            index={index}
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
