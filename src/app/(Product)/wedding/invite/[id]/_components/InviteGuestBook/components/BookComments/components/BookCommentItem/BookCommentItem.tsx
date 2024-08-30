'use client';

import { DotColumIcon } from '@/components/server';
import { useToggle } from '@/hooks';

import { BookCommentItemProps } from './BookCommentItem.type';

import { AnimatePresence, motion } from 'framer-motion';

const BookCommentItem = ({ message, name, created }: BookCommentItemProps) => {
  const { isToggle, handleToggle } = useToggle();

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

      <span className='absolute top-[1.6rem] right-[1.6rem] flex flex-col justify-end items-end'>
        <button
          type='button'
          aria-label='comment_edit_button'
          onClick={handleToggle}
        >
          <DotColumIcon size='2.4rem' />
        </button>

        <AnimatePresence>
          {isToggle && (
            <motion.button
              type='button'
              aria-label='comment_delete_button'
              className='text-size14 px-[1rem] py-[0.6rem] bg-white_100 border-[0.1rem] border-black_500 rounded-radius8'
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
            >
              삭제하기
            </motion.button>
          )}
        </AnimatePresence>
      </span>
    </li>
  );
};

export default BookCommentItem;
