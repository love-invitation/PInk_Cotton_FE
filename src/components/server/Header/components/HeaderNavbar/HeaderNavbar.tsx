'use client';

import style from './HeaderNavbar.style.module.css';

import { usePathname } from 'next/navigation';

import Divider from '@/components/server/Divider/Divider';

import { HeaderNavItem } from './components';

const HeaderNavbar = () => {
  const pathName = usePathname();

  const introduceHref = '/introduce';
  const templateHref = '/template';
  const customerHref = '/center';

  return (
    <nav className={style.nav}>
      <ul className={`text-gray_500 flex items-center text-nowrap font-regular ${style.nav_list}`}>
        <HeaderNavItem
          pathName={pathName}
          href={introduceHref}
          title='소개'
        />

        <Divider
          direction='vertical'
          className='h-[30%] mx-[2rem]'
        />

        <HeaderNavItem
          pathName={pathName}
          href={templateHref}
          title='모바일청첩장 종류'
        />

        <Divider
          direction='vertical'
          className='h-[30%] mx-[2rem]'
        />

        <HeaderNavItem
          pathName={pathName}
          href={customerHref}
          title='고객센터'
        />
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
