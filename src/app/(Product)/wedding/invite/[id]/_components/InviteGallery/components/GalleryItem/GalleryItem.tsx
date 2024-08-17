import Image from 'next/image';

import { GalleryItemProps } from './GalleryItem.type';

const GalleryItem = ({ imageUrl, onClick }: GalleryItemProps) => {
  return (
    <li className='relative w-[12rem] h-[12rem] shadow-shadow_500 rounded-radius5'>
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
    </li>
  );
};

export default GalleryItem;
