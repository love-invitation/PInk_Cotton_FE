'use client';

import { useMemo } from 'react';

import tailwind from '@/../tailwind.config';
import { ModalPortal } from '@/components/client/Modal';
import { BracketLeftIcon, BracketRightIcon, Carousel, CloseIcon } from '@/components/server';

import { GalleryModalProps } from './GalleryModal.type';
import { useGalleryMoving } from './hooks';

import resolveConfig from 'tailwindcss/resolveConfig';

const GalleryModal = ({ galleryList, viewNumber, isShow, onClose }: GalleryModalProps) => {
  const list = useMemo(() => galleryList.map(({ imageUrl }) => imageUrl), [galleryList]);

  const { handleClickNext, handleClickPrev, viewIndex } = useGalleryMoving({
    viewNumber,
    maxIndex: galleryList.length - 1,
  });

  const { theme } = resolveConfig(tailwind);

  return (
    <ModalPortal isShow={isShow}>
      <section className='flex flex-col h-full w-full cursor-default items-center justify-center bg-black_500 absolute left-[0px] top-[0px] z-modal scrollbar-hide select-all m-0 p-0'>
        <button
          type='button'
          className='absolute right-[1rem] top-[1rem] z-modal'
          aria-label='close_modal'
          onClick={onClose}
        >
          <CloseIcon fill={theme.colors.gray_500} />
        </button>

        <p className='text-size18 absolute left-[2.4rem] top-[2rem] z-modal text-gray_500 font-bold select-none'>
          {viewIndex + 1} / {list.length}
        </p>

        <div className='w-full max-w-[60rem] h-[6rem] absolute flex justify-between items-center px-[2rem] z-modal'>
          <button
            type='button'
            className='cursor-pointer'
            aria-label='prev_image'
            onClick={handleClickPrev}
          >
            <BracketLeftIcon
              size='4rem'
              fill={theme.colors.gray_500}
            />
          </button>

          <button
            type='button'
            className='cursor-pointer'
            aria-label='next_image'
            onClick={handleClickNext}
          >
            <BracketRightIcon
              size='4rem'
              fill={theme.colors.gray_500}
            />
          </button>
        </div>

        <article className='w-full max-w-[60rem] h-[90%] relative'>
          <Carousel srcList={list} />
        </article>
      </section>
    </ModalPortal>
  );
};

export default GalleryModal;
