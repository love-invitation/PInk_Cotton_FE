import { useCallback } from 'react';

import { MUTATE_OPTIONS } from '@/constants';
import { useMutation } from '@tanstack/react-query';

import { UseDeleteCommentProps } from './useDeleteComment.type';

const useDeleteComment = ({ commentId, inviteId, onSuccess }: UseDeleteCommentProps) => {
  const { mutate } = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_DELETE());

  const handleDeleteComment = useCallback(
    (password: string) => {
      mutate(
        { inviteId, commentId, password },
        {
          onSuccess: () => {
            onSuccess();
          },
        },
      );
    },
    [commentId, inviteId, mutate, onSuccess],
  );

  return handleDeleteComment;
};

export default useDeleteComment;
