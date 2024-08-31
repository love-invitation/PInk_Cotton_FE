'use client';

import { useCallback } from 'react';

import { MUTATE_OPTIONS, QUERY_OPTIONS } from '@/constants';
import { GuestBook } from '@/types/response';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BookCommentsProps } from './BookComments.type';
import { BookCommentItem } from './components';

export const BookComments = ({ inviteId }: BookCommentsProps) => {
  const { data } = useQuery<GuestBook>(QUERY_OPTIONS.GET_GUEST_BOOKS({ inviteId: 'key' }));

  const deleteMutation = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_DELETE());

  const convertDate = useCallback((date: string) => {
    const changedDate = new Date(date);

    return `${changedDate.getFullYear()}.${changedDate.getMonth() + 1}.${changedDate.getDate()}`;
  }, []);

  if (!data) {
    return null;
  }

  const handleDelete = (commentId: string) => {
    deleteMutation.mutate({ commentId, inviteId, password: '테스트' });
  };

  return (
    <ul className='w-full px-[1.6rem] flex flex-col gap-[2rem]'>
      {data.result.content.map(({ message, created, name, id }) => (
        <BookCommentItem
          key={created + name}
          message={message}
          name={name}
          created={convertDate(created)}
          id={id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default BookComments;
