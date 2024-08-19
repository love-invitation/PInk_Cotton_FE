import { PinkMap } from '@/components/client';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteLocationProps } from './InviteLocation.type';

import { twMerge } from 'tailwind-merge';

const InviteLocation = ({ placeData }: InviteLocationProps) => {
  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[4rem]')}>
      <h2 className={INVITE_STYLE.TITLE}>LOCATION</h2>

      <PinkMap
        center={{ lat: placeData.latitude, lng: placeData.longitude }}
        height='32rem'
      />
    </article>
  );
};

export default InviteLocation;
