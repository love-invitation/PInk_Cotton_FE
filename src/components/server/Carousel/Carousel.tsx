import { CarouselProps } from './Carousel.type';
import { CarouselImageItem } from './components';

import { twMerge } from 'tailwind-merge';

const Carousel = ({ srcList, width = '100%', height = '100%', className = '' }: CarouselProps) => {
  return (
    <ul
      className={twMerge('carousel bg-black', className)}
      style={{ width, height }}
    >
      {srcList &&
        srcList.map((src, index) => (
          <CarouselImageItem
            src={src}
            index={index}
            key={src}
          />
        ))}
    </ul>
  );
};

export default Carousel;
