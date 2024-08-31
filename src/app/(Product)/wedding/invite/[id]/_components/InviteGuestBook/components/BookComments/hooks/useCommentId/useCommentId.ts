import { useCallback, useState } from 'react';

const useCommentId = (callback: () => void) => {
  const [commentId, setCommentId] = useState('');

  const handleChangeId = useCallback(
    (newId: string) => {
      setCommentId(newId);
      callback();
    },
    [callback],
  );

  return {
    commentId,
    handleChangeId,
  };
};

export default useCommentId;
