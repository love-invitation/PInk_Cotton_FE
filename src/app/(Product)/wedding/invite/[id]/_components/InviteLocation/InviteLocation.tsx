import { PinkMap } from '@/components/client';
import { Divider } from '@/components/server';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteLocationProps } from './InviteLocation.type';
import { LocationActions, LocationTransportItem } from './components';

import { twMerge } from 'tailwind-merge';

const InviteLocation = ({ placeData, transportData }: InviteLocationProps) => {
  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[4rem]')}>
      <h2 className={INVITE_STYLE.TITLE}>LOCATION</h2>

      <span className='w-full flex flex-col justify-center items-center gap-[1.2rem]'>
        <p className='text-size18 font-bold'>{[placeData.name, placeData.detail].join(', ')}</p>
        <p className='text-size14'>{placeData.address}</p>
      </span>

      <PinkMap
        center={{ lat: placeData.latitude, lng: placeData.longitude }}
        height='32rem'
      />

      <LocationActions
        lat={placeData.latitude}
        lng={placeData.longitude}
        placeName={placeData.name}
      />

      <Divider className='w-[90%] h-[0.2rem]' />

      <ul className='w-[90%] flex flex-col gap-[2rem]'>
        {transportData.transport.map(({ kind, detail }) => (
          <LocationTransportItem
            key={kind}
            kind={kind}
            detail={detail}
          />
        ))}
      </ul>
    </article>
  );
};

export default InviteLocation;
