import Link from 'next/link';

import Divider from '@/components/server/Divider/Divider';

const FooterNavigator = () => {
  return (
    <nav className='w-full flex items-center'>
      <h6 className='text-[1.2rem] font-bold mr-[2rem]'>PINKCOTTON</h6>

      <ul className='flex flex-grow text-[1.2rem] text-gray_100'>
        <li>
          <Link href='/'>이용약관</Link>
        </li>
        <Divider direction='vertical' />
        <li>
          <Link href='/'>개인정보처리방침</Link>
        </li>
        <Divider direction='vertical' />
        <li>
          <Link href='/'>제휴문의</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigator;
