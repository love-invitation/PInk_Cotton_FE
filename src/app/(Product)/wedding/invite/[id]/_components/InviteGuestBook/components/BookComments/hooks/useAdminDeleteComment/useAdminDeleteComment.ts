import { useCallback } from 'react';

import { MUTATE_OPTIONS } from '@/constants';
import { useMutation } from '@tanstack/react-query';

import { UseAdminDeleteCommentProps } from './useAdminDeleteComment.type';

const useAdminDeleteComment = ({ inviteId, commentId, onSuccess }: UseAdminDeleteCommentProps) => {
  const { mutate } = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_DELETE_ADMIN());

  const handleAdmin = useCallback(() => {
    mutate(
      { inviteId, commentId },
      {
        onSuccess: () => {
          onSuccess();
        },
      },
    );
  }, [commentId, inviteId, mutate, onSuccess]);

  return handleAdmin;
};

export default useAdminDeleteComment;
