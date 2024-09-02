'use client';

import { PinkMap } from '@/components/client';
import { Divider } from '@/components/server';
import { useFramerInView } from '@/hooks';

import { INVITE_ANIMATION } from '../../Invite.constants';
import { INVITE_STYLE } from '../../Invite.style';
import { InviteLocationProps } from './InviteLocation.type';
import { LocationActions, LocationTransportItem } from './components';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const InviteLocation = ({ placeData, transportData }: InviteLocationProps) => {
  const { ref, inView } = useFramerInView<HTMLSpanElement>({ once: true });

  return (
    <motion.article
      ref={ref}
      className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[4rem] relative')}
      initial={INVITE_ANIMATION.INIT}
      animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
      transition={INVITE_ANIMATION.DURATION}
    >
      <span className='w-full flex flex-col justify-center items-center gap-[1.6rem]'>
        <h2 className={INVITE_STYLE.TITLE}>LOCATION</h2>
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
    </motion.article>
  );
};

export default InviteLocation;
