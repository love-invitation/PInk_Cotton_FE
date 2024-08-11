import { INVITE_STYLE } from '../../Invite.style';

import { twMerge } from 'tailwind-merge';

const InviteGallery = () => {
  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'border-2 border-red-500')}>
      <h2 className={INVITE_STYLE.TITLE}>GALLERY</h2>
    </article>
  );
};

export default InviteGallery;
