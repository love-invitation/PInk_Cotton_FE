import { INVITE_STYLE } from '../../Invite.style';
import { CreateBookComment } from './components';

import { twMerge } from 'tailwind-merge';

const InviteGuestBook = () => {
  return (
    <section className={twMerge(INVITE_STYLE.LAYOUT, 'gap-[4rem]')}>
      <span className='w-full flex flex-col items-center justify-center gap-[1.6rem]'>
        <h2 className={INVITE_STYLE.TITLE}>GUEST BOOK</h2>
        <p className='text-size18 font-bold'>방명록</p>
        <p className='text-size14'>축복의 의미로 방명록을 작성해보세요.</p>
      </span>

      <CreateBookComment />
    </section>
  );
};

export default InviteGuestBook;
