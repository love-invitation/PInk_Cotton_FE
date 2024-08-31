'use client';

import { useCallback, useState } from 'react';

import { AlertModal, PasswordModal } from '@/components/client';
import { MUTATE_OPTIONS, QUERY_OPTIONS } from '@/constants';
import { useToggle } from '@/hooks';
import { GuestBook } from '@/types/response';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BookCommentsProps } from './BookComments.type';
import { BookCommentItem } from './components';

export const BookComments = ({ inviteId }: BookCommentsProps) => {
  const { isToggle, handleSetTrue, handleSetFalse } = useToggle();
  const {
    isToggle: isAlertModal,
    handleSetTrue: handleOpenAlert,
    handleSetFalse: handleCloseAlert,
  } = useToggle();

  const { data, refetch } = useQuery<GuestBook>(QUERY_OPTIONS.GET_GUEST_BOOKS({ inviteId: 'key' }));
  const deleteMutation = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_DELETE());
  const [commentId, setCommentId] = useState('');

  const convertDate = useCallback((date: string) => {
    const changedDate = new Date(date);

    return `${changedDate.getFullYear()}.${changedDate.getMonth() + 1}.${changedDate.getDate()}`;
  }, []);

  const handleDeleteComment = useCallback(
    (password: string) => {
      deleteMutation.mutate(
        { inviteId, commentId, password },
        {
          onSuccess: () => {
            refetch();
            handleOpenAlert();
          },
        },
      );
    },
    [commentId, deleteMutation, handleOpenAlert, inviteId, refetch],
  );

  const handleOpenModal = useCallback(
    (newId: string) => {
      setCommentId(newId);
      handleSetTrue();
    },
    [handleSetTrue],
  );

  if (!data) {
    return null;
  }

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

      <AlertModal
        isShow={isAlertModal}
        onClose={handleCloseAlert}
        message='메세지가 정상적으로 제거되었습니다.'
      />
    </ul>
  );
};

export default BookComments;
