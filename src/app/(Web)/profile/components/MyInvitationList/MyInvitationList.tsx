'use client';

import { QUERY_OPTIONS } from '@/constants';
import { MyInvitationsResponse } from '@/types/response/Profile';
import { useSuspenseQuery } from '@tanstack/react-query';

import MyInvitationItem from '../MyInvitationItem/MyInvitationItem';

const MyInvitations = () => {
  const { data } = useSuspenseQuery<MyInvitationsResponse>(QUERY_OPTIONS.MY_INVITATIONS());

  return (
    <ul className='grid [grid-template-columns:repeat(auto-fill,minmax(40rem,40rem))] auto-rows-auto gap-[10rem] justify-center items-center'>
      {data?.result.map(({ imageUrl, title, lastModified, isPaid, tsid, thumbnail }) => (
        <MyInvitationItem
          key={tsid}
          imageUrl={imageUrl}
          title={title}
          lastModified={lastModified}
          isPaid={isPaid}
          tsid={tsid}
          thumbnail={thumbnail}
        />
      ))}
    </ul>
  );
};

export default MyInvitations;
