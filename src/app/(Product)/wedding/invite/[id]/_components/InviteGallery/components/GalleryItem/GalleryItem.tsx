'use client';

import Image from 'next/image';

import { INVITE_ANIMATION } from '../../../../Invite.constants';
import { GalleryItemProps } from './GalleryItem.type';

import { motion } from 'framer-motion';

const GalleryItem = ({ imageUrl, onClick, isInView, index }: GalleryItemProps) => {
  return (
    <motion.li
      className='relative w-[12rem] h-[12rem] shadow-shadow_500 rounded-radius5'
      initial={INVITE_ANIMATION.INIT}
      animate={isInView ? INVITE_ANIMATION.ANIMATE : {}}
      transition={{ duration: 1, delay: 0.3 * index }}
    >
      <button
        type='button'
        className='w-full h-full relative'
        onClick={onClick}
      >
        <Image
          src={imageUrl}
          fill
          className='object-contain'
          sizes='100%, 100%'
          priority
          alt='gallery_image'
        />
      </button>
    </motion.li>
  );
};

export default GalleryItem;
