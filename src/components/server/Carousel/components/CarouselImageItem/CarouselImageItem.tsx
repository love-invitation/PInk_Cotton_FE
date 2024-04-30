import Image from 'next/image';

import { CarouselImageItemProps } from './CarouselImageItem.type';

const CarouselImageItem = ({ src, index }: CarouselImageItemProps) => {
  return (
    <li
      // TODO
      // id값 추후 고려
      id={`photo_${index}`}
      className='carousel-item w-full relative'
      key={src}
    >
      <Image
        src={src}
        alt={`이미지 ${index}`}
        fill
        sizes='100%'
        style={{
          objectFit: 'contain',
        }}
      />
    </li>
  );
};

export default CarouselImageItem;
