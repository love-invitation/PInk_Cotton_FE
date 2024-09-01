'use client';

import { useState } from 'react';

import { AlertModal, Button, LoginModal, PasswordModal } from '@/components/client';
import { QUERY_OPTIONS } from '@/constants';
import { useToggle } from '@/hooks';
import { GuestBook } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

import { BookCommentsProps } from './BookComments.type';
import { BookCommentItem, CommentIndicator } from './components';
import {
  useAdminDeleteComment,
  useCheckLogin,
  useCommentId,
  useCommentPages,
  useDeleteComment,
} from './hooks';
import { convertCommentDate } from './util';

export const BookComments = ({ inviteId }: BookCommentsProps) => {
  const [page, setPage] = useState(0);

  const { isToggle, handleSetTrue, handleSetFalse } = useToggle();
  const {
    isToggle: isAlertModal,
    handleSetTrue: handleOpenAlert,
    handleSetFalse: handleCloseAlert,
  } = useToggle();

  const {
    isToggle: isLoginModal,
    handleSetTrue: handleOpenLogin,
    handleSetFalse: handleCloseLogin,
  } = useToggle();

  const { data, refetch, isLoading, isError } = useQuery<GuestBook>(
    QUERY_OPTIONS.GET_GUEST_BOOKS({ inviteId, page }),
  );

  const { commentId, handleChangeId } = useCommentId(handleSetTrue);
  const pages = useCommentPages({ isLoading, data, page });
  const isLogin = useCheckLogin();

  const handleDelete = useDeleteComment({
    commentId,
    inviteId,
    onSuccess: () => {
      refetch();
      handleOpenAlert();
    },
  });

  const handleAdminDelete = useAdminDeleteComment({
    commentId,
    inviteId,
    onSuccess: () => {
      refetch();
      handleOpenAlert();
    },
  });

  const handleNextPage = () => {
    setPage((prevPage) => {
      if (prevPage + 1 === data?.result.totalPages) {
        return prevPage;
      }
      return prevPage + 1;
    });
  };

  const handlePrevPage = () => {
    setPage((prevPage) => {
      if (prevPage === 0) {
        return prevPage;
      }

      return prevPage - 1;
    });
  };

  return (
    <>
      <CommentIndicator
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        page={page}
        pages={pages}
      />

      <ul className='w-full min-h-[60rem] px-[1.6rem] flex flex-col gap-[2rem]'>
        {isError && (
          <li className='w-full py-[2rem] px-[10rem] flex justify-center items-center gap-[1.6rem] flex-col text-size14'>
            <p>불러오는데 실패하였습니다.</p>

            <Button
              onClick={refetch}
              backgroundColor='black'
            >
              재시도
            </Button>
          </li>
        )}

        {!isError && (!data || data.result.empty) && (
          <li className='w-full py-[6rem] flex justify-center text-size14'>
            <p>신랑 신부에게 축하메세지를 전해보세요!</p>
          </li>
        )}

        {data?.result.content.map(({ message, created, name, id }) => (
          <BookCommentItem
            key={created + name}
            message={message}
            name={name}
            created={convertCommentDate(created)}
            id={id}
            onDelete={handleChangeId}
          />
        ))}

        <PasswordModal
          isShow={isToggle}
          isLogin={isLogin}
          onClose={handleSetFalse}
          onAccept={handleDelete}
          onLogin={handleOpenLogin}
          onAdminDelete={handleAdminDelete}
        />

        <AlertModal
          isShow={isAlertModal}
          onClose={handleCloseAlert}
          message='메세지가 정상적으로 제거되었습니다.'
        />

        <LoginModal
          isShow={isLoginModal}
          onClose={handleCloseLogin}
        />
      </ul>
    </>
  );
};

export default BookComments;
