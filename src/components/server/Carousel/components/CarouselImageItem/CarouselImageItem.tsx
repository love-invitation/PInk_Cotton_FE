import Image from 'next/image';

import { CarouselImageItemProps } from './CarouselImageItem.type';

const CarouselImageItem = ({ src, index }: CarouselImageItemProps) => {
  return (
    <li
      id={`img_${index}`}
      className='carousel-item w-full relative'
      key={src}
    >
      <Image
        src={src}
        alt='carousel_image'
        fill
        priority
        style={{
          objectFit: 'contain',
        }}
      />
    </li>
  );
};

export default CarouselImageItem;
