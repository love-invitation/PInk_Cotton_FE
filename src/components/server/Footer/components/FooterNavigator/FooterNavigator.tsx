import Link from 'next/link';

import Divider from '@/components/server/Divider/Divider';

const FooterNavigator = () => {
  const liStyle = 'hover:brightness-75 hover:underline transition-all';
  return (
    <nav className='w-full flex items-center pl-[2rem]'>
      <h6 className='text-size14 font-bold mr-[2rem]'>PINKCOTTON</h6>

      <ul className='flex flex-grow text-size14 h-[1.8rem] items-center text-gray_100'>
        <li className={liStyle}>
          <Link href='/'>이용약관</Link>
        </li>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <li className={liStyle}>
          <Link href='/'>개인정보처리방침</Link>
        </li>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <li className={liStyle}>
          <Link href='/'>제휴문의</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigator;
