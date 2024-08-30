'use client';

import { useCallback } from 'react';

import { QUERY_OPTIONS } from '@/constants';
import { GuestBook } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

export const BookComments = () => {
  const { data } = useQuery<GuestBook>(QUERY_OPTIONS.GET_GUEST_BOOKS({ inviteId: 'key' }));

  const convertDate = useCallback((date: string) => {
    const changedDate = new Date(date);

    return `${changedDate.getFullYear()}.${changedDate.getMonth() + 1}.${changedDate.getDate()}`;
  }, []);

  if (!data) {
    return null;
  }

  return (
    <ul className='w-full px-[1.6rem] flex flex-col gap-[2rem]'>
      {data.result.content.map(({ message, created, name }) => (
        <li
          key={message}
          className='w-full p-[1.6rem] flex flex-col gap-[1.6rem] shadow-shadow_500 relative pr-[3.6rem]'
        >
          <span className='w-full flex items-center gap-[1.6rem]'>
            <h6 className='text-size15 font-bold flex-grow-[1]'>{name}</h6>
            <p className='text-size14'>{convertDate(created)}</p>
          </span>

          <p className='text-size14'>{message}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookComments;
