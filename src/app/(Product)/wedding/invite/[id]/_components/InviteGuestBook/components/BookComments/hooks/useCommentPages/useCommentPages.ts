import { useEffect, useState } from 'react';

import { UseCommentPagesProps } from './useCommentPages.type';

const useCommentPages = ({ isLoading, data, page }: UseCommentPagesProps) => {
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

  return pages;
};

export default useCommentPages;
