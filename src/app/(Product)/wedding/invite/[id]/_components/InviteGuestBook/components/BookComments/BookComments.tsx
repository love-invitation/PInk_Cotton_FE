'use client';

import { useCallback, useState } from 'react';

import { PasswordModal } from '@/components/client';
import { MUTATE_OPTIONS, QUERY_OPTIONS } from '@/constants';
import { useToggle } from '@/hooks';
import { GuestBook } from '@/types/response';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BookCommentsProps } from './BookComments.type';
import { BookCommentItem } from './components';

export const BookComments = ({ inviteId }: BookCommentsProps) => {
  const { isToggle, handleSetTrue, handleSetFalse } = useToggle();

  const { data } = useQuery<GuestBook>(QUERY_OPTIONS.GET_GUEST_BOOKS({ inviteId: 'key' }));
  const deleteMutation = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_DELETE());
  const [commentId, setCommentId] = useState('');

  const convertDate = useCallback((date: string) => {
    const changedDate = new Date(date);

    return `${changedDate.getFullYear()}.${changedDate.getMonth() + 1}.${changedDate.getDate()}`;
  }, []);

  if (!data) {
    return null;
  }

  const handleOpenModal = (newId: string) => {
    setCommentId(newId);
    handleSetTrue();
  };

  const handleDeleteComment = (password: string) => {
    deleteMutation.mutate(
      { inviteId, commentId, password },
      {
        onSuccess: () => {},
      },
    );
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
          onDelete={handleOpenModal}
        />
      ))}

      <PasswordModal
        isShow={isToggle}
        onClose={handleSetFalse}
        onAccept={handleDeleteComment}
      />
    </ul>
  );
};

export default BookComments;
