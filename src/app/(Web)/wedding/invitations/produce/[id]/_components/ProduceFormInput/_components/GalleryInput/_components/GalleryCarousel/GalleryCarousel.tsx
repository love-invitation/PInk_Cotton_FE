'use client';

import { useFormContext } from 'react-hook-form';

import { Carousel } from '@/components/server';
import useClickAway from '@/hooks/useClickAway/useClickAway';

import { GalleryCarouselProps } from './GalleryCarousel.type';

const GalleryCarousel = ({ onClick }: GalleryCarouselProps) => {
  const ref = useClickAway<HTMLDivElement>(onClick);
  const { watch } = useFormContext();

  return (
    <div className='fixed bg-transparent_90 z-modal w-dvw h-dvh top-0 left-0'>
      <section className='w-full h-full flex items-center justify-center'>
        <div
          ref={ref}
          className='w-full h-[60%]'
        >
          <Carousel srcList={watch('gallery').map((image: File) => URL.createObjectURL(image))} />
        </div>
      </section>
    </div>
  );
};

export default GalleryCarousel;
