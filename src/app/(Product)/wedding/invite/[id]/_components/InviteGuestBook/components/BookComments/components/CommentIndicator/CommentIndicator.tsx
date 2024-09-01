import { BracketLeftIcon, BracketRightIcon } from '@/components/server';

import { CommentIndicatorProps } from './CommentIndicator.type';

import { twJoin } from 'tailwind-merge';

const CommentIndicator = ({ onNext, onPrev, page, pages }: CommentIndicatorProps) => {
  const commonStyle = 'join-item btn text-size14 flex items-center justify-center';
  return (
    <div className='join '>
      <button
        type='button'
        className={commonStyle}
        onClick={onPrev}
        aria-label='comment-prev-button'
      >
        <BracketLeftIcon size='1rem' />
      </button>

      {pages.map((num) => (
        <button
          key={num}
          type='button'
          className={twJoin(commonStyle, num === page + 1 && 'btn-active')}
        >
          {num}
        </button>
      ))}

      <button
        type='button'
        className={commonStyle}
        onClick={onNext}
        aria-label='comment-next-button'
      >
        <BracketRightIcon size='1rem' />
      </button>
    </div>
  );
};

export default CommentIndicator;
