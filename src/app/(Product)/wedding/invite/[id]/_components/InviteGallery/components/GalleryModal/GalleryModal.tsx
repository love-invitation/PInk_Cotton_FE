'use client';

import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import tailwind from '@/../tailwind.config';
import { ModalPortal } from '@/components/client/Modal';
import { BracketLeftIcon, BracketRightIcon, Carousel, CloseIcon } from '@/components/server';
import { InvitationGalleryItem } from '@/types/response';

import resolveConfig from 'tailwindcss/resolveConfig';

interface GalleryModalProps {
  isShow: boolean;
  onClose: () => void;
  viewNumber: number;
  galleryList: InvitationGalleryItem[];
}

const GalleryModal = ({ galleryList, viewNumber, isShow, onClose }: GalleryModalProps) => {
  const [viewIndex, setViewIndex] = useState(viewNumber);
  const route = useRouter();

  const list = useMemo(() => galleryList.map(({ imageUrl }) => imageUrl), [galleryList]);
  const { theme } = resolveConfig(tailwind);

  const handleClickPrev = () => {
    setViewIndex((index) => {
      const nextIndex = index - 1 >= 0 ? index - 1 : 0;
      return nextIndex;
    });
  };

  const handleClickNext = () => {
    const maxLength = galleryList.length - 1;

    setViewIndex((index) => {
      const nextIndex = index + 1 <= maxLength ? index + 1 : maxLength;
      return nextIndex;
    });
  };

  useEffect(() => {
    route.push(`#photo_${viewIndex}`);
  }, [viewIndex, route]);

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
