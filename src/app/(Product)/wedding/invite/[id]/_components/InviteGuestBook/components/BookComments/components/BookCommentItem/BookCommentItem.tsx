import { DotColumIcon } from '@/components/server';

import { BookCommentItemProps } from './BookCommentItem.type';

const BookCommentItem = ({ message, name, created }: BookCommentItemProps) => {
  return (
    <li
      key={message}
      className='w-full p-[1.6rem] flex flex-col gap-[1.6rem] shadow-shadow_500 relative pr-[6rem]'
    >
      <span className='w-full flex items-center gap-[1.6rem]'>
        <h6 className='text-size15 font-bold flex-grow-[1]'>{name}</h6>
        <p className='text-size14'>{created}</p>
      </span>

      <p className='text-size14'>{message}</p>

      <button
        type='button'
        className=' absolute top-[1.6rem] right-[1.6rem]'
        aria-label='comment_edit_button'
      >
        <DotColumIcon size='2.4rem' />
      </button>
    </li>
  );
};

export default BookCommentItem;
