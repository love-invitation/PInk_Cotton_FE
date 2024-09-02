'use client';

import { useFormContext } from 'react-hook-form';

import { CheckBox } from '@/components/client';

const GuestBookCheck = () => {
  const { watch, setValue } = useFormContext();

  return (
    <article className='w-full overflow-hidden max-w-[73rem] rounded-radius10 shadow-shadow_500'>
      <button
        type='button'
        onClick={() => setValue('guestbookCheck', !watch('guestbookCheck'))}
        className='flex flex-1 gap-2 items-center w-full select-none break-keep text-start h-[6rem] px-[2.4rem] text-size15 font-semibold'
      >
        <CheckBox checked={watch('guestbookCheck')} />
        <p>방명록</p>
      </button>
    </article>
  );
};

export default GuestBookCheck;
