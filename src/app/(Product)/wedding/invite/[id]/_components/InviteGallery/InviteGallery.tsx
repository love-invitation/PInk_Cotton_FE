import { INVITE_STYLE } from '../../Invite.style';
import { InviteGalleryProps } from './InviteGallery.type';

import { twMerge } from 'tailwind-merge';

const InviteGallery = ({ galleryData }: InviteGalleryProps) => {
  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[4rem] border-2 border-red-500')}>
      <h2 className={INVITE_STYLE.TITLE}>GALLERY</h2>

      {galleryData.galleries.map(({ imageUrl, originFileName }) => (
        <div key={originFileName}>{originFileName + imageUrl}</div>
      ))}
    </article>
  );
};

export default InviteGallery;
