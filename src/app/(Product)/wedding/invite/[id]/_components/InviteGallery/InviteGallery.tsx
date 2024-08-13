import Image from 'next/image';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteGalleryProps } from './InviteGallery.type';

import { twMerge } from 'tailwind-merge';

const InviteGallery = ({ galleryData }: InviteGalleryProps) => {
  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[6rem] border-2 border-red-500')}>
      <h2 className={INVITE_STYLE.TITLE}>GALLERY</h2>

      <ul className='w-full px-[1.6rem] flex flex-wrap gap-[1rem] items-center justify-center'>
        {galleryData.galleries.map(({ imageUrl, originFileName }) => (
          <li
            key={originFileName}
            className='relative w-[12rem] h-[12rem] border-2 border-red-500'
          >
            <Image
              src={imageUrl}
              fill
              className='object-contain'
              sizes='100%, 100%'
              priority
              alt={`gallery_image_${originFileName}`}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default InviteGallery;
