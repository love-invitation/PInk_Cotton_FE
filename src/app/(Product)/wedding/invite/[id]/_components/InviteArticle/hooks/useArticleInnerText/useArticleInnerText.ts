import { useEffect, useRef } from 'react';

import { UseArticleInnerTextProps } from './useArticleInnerText.type';

const useArticleInnerText = ({ article }: UseArticleInnerTextProps) => {
  const articleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const contentElement = articleRef.current;

    if (!contentElement) {
      return;
    }

    contentElement.innerHTML = article;
  }, [article]);

  return articleRef;
};

export default useArticleInnerText;
