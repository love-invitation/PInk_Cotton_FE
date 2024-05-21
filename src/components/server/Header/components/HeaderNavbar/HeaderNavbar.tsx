'use client';

import { usePathname } from 'next/navigation';

import Divider from '@/components/server/Divider/Divider';
import { DOMAIN_URL } from '@/constants';

import { useScrollMove } from '../../hooks';
import { HeaderNavItem } from './components';

const HeaderNavbar = () => {
  const pathName = usePathname();

  const { handleMoveScroll } = useScrollMove({ target: DOMAIN_URL.SERVICE });

  return (
    <nav className='header_min:mr-[10%] header_max:w-full header_max:h-full'>
      <ul className='text-gray_500 flex items-center text-nowrap font-regular header_min:h-[5rem] header_min:text-size18 header_max:h-[4.2rem] header_max:text-size16 justify-evenly'>
        <HeaderNavItem
          pathName={pathName}
          href={DOMAIN_URL.MAIN}
          title='소개'
        />

        <Divider
          direction='vertical'
          className='h-[30%] mx-[2rem]'
        />

        <HeaderNavItem
          pathName={pathName}
          href={DOMAIN_URL.WEDDING_INVITATIONS}
          title='모바일청첩장 종류'
        />

        <Divider
          direction='vertical'
          className='h-[30%] mx-[2rem]'
        />

        <li>
          <button
            type='button'
            onClick={handleMoveScroll}
          >
            고객센터
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
