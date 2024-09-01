'use client';

import { useCallback, useEffect, useState } from 'react';

import { AlertModal, LoginModal, PasswordModal } from '@/components/client';
import { QUERY_OPTIONS } from '@/constants';
import { useToggle } from '@/hooks';
import { GuestBook } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

import { BookCommentsProps } from './BookComments.type';
import { BookCommentItem } from './components';
import { useAdminDeleteComment, useCheckLogin, useCommentId, useDeleteComment } from './hooks';

import { twJoin } from 'tailwind-merge';

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

  const { data, refetch, isLoading } = useQuery<GuestBook>(
    QUERY_OPTIONS.GET_GUEST_BOOKS({ inviteId, page }),
  );

  const { commentId, handleChangeId } = useCommentId(handleSetTrue);

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

  const isLogin = useCheckLogin();

  const convertDate = useCallback((date: string) => {
    const changedDate = new Date(date);

    return `${changedDate.getFullYear()}.${changedDate.getMonth() + 1}.${changedDate.getDate()}`;
  }, []);

  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!data) {
      return setPages([]);
    }

    const { first, last, totalPages } = data.result;

    if (totalPages < 6) {
      const list = [];

      for (let i = 1; i < totalPages + 1; i += 1) {
        list.push(i);
      }

      return setPages(list);
    }

    if (first || page + 1 === 2) {
      return setPages([1, 2, 3, 4, 5]);
    }

    if (page + 2 === totalPages || last) {
      return setPages([totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
    }

    return setPages([page - 1, page, page + 1, page + 2, page + 3]);
  }, [data, isLoading, page]);

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
      <div className='join '>
        <button
          type='button'
          className='join-item btn text-size16'
          onClick={handlePrevPage}
        >
          «
        </button>

        {pages.map((num) => (
          <button
            key={num}
            type='button'
            className={twJoin('join-item btn text-size16', num === page + 1 && 'btn-active')}
          >
            {num}
          </button>
        ))}

        <button
          type='button'
          className='join-item btn text-size16'
          onClick={handleNextPage}
        >
          »
        </button>
      </div>

      <ul className='w-full min-h-[60rem] px-[1.6rem] flex flex-col gap-[2rem]'>
        {data?.result.content.map(({ message, created, name, id }) => (
          <BookCommentItem
            key={created + name}
            message={message}
            name={name}
            created={convertDate(created)}
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
