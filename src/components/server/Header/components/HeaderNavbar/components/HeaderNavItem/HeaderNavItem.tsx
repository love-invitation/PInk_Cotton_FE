import Link from 'next/link';

import { DotIcon } from '@/components/server/icons';

import { HeaderNavItemProps } from './HeaderNavItem.type';

import { twJoin } from 'tailwind-merge';

const HeaderNavItem = ({ pathName, href, title }: HeaderNavItemProps) => {
  return (
    <li
      className={twJoin(
        pathName === href && 'text-black_900',
        'hover:brightness-90 flex justify-center relative',
      )}
    >
      <Link href={href}>{title}</Link>
      {pathName === href && <DotIcon className='absolute bottom-[-1rem]' />}
    </li>
  );
};

export default HeaderNavItem;
