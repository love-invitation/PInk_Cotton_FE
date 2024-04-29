'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Divider from '@/components/server/Divider/Divider';

import { twJoin } from 'tailwind-merge';

const HeaderNavbar = () => {
  const pathName = usePathname();

  const introducePath = '/introduce';
  const templatePath = '/template';
  const customerPath = '/center';

  return (
    <nav>
      <ul className='h-[5rem] text-size18 font-regular text-gray_500 flex items-center'>
        <li
          className={twJoin(pathName === introducePath && 'text-black_900', 'hover:brightness-90')}
        >
          <Link href={introducePath}>소개</Link>
        </li>

        <Divider
          direction='vertical'
          className='h-[30%] mx-[2rem]'
        />

        <li
          className={twJoin(pathName === templatePath && 'text-black_900', 'hover:brightness-90')}
        >
          <Link href={templatePath}>모바일청첩장 종류</Link>
        </li>

        <Divider
          direction='vertical'
          className='h-[30%] mx-[2rem]'
        />

        <li
          className={twJoin(pathName === customerPath && 'text-black_900', 'hover:brightness-90')}
        >
          <Link href={customerPath}>고객센터</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
