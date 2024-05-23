import Link from 'next/link';

import { Button } from '@/components/client';
import { UserIcon } from '@/components/server/icons';

import tailwindConfig from '../../../../../../tailwind.config';

import resolveConfig from 'tailwindcss/resolveConfig';

const HeaderUserInfo = () => {
  const { theme } = resolveConfig(tailwindConfig);

  // TODO
  // 추후 로그인 기능 제작시 store값으로 변경
  const isLogin = false;

  return (
    <div className='w-[11rem] h-[2.4rem] mr-[4%] flex items-center justify-center'>
      {isLogin && (
        <Button
          backgroundColor='naked'
          fontSize='1.8rem'
          fontWeight='regular'
          className='rounded-none text-gray_100 flex items-center px-0 header_min:w-full header_min:h-full header_min:text-nowrap header_min:justify-around header_max:w-[2.4rem] header_max:h-[2.4rem] header_max:justify-center'
        >
          <UserIcon
            size='2.4rem'
            fill={theme.colors.gray_100}
            className='header_max:w-[2.4rem] header_max:h-[2.4rem]'
          />
          <span className='hidden header_min:block'>마이페이지</span>
        </Button>
      )}
      {!isLogin && (
        <Link
          className='underline text-pink_500 text-size16 font-semiBold'
          href='/login'
          scroll={false}
        >
          로그인
        </Link>
      )}
    </div>
  );
};

export default HeaderUserInfo;
