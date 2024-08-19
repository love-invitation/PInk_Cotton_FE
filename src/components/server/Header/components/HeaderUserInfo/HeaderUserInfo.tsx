'use client';

import Link from 'next/link';

import { Button } from '@/components/client';
import { UserIcon } from '@/components/server/icons';
import { MUTATE_OPTIONS, QUERY_OPTIONS } from '@/constants';
import { useMutation, useQuery } from '@tanstack/react-query';

import tailwindConfig from '../../../../../../tailwind.config';

import { twJoin } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

const HeaderUserInfo = () => {
  const { data, isError, isFetching } = useQuery(QUERY_OPTIONS.AUTH_USER());
  const { mutate } = useMutation(MUTATE_OPTIONS.LOGOUT());
  const { theme } = resolveConfig(tailwindConfig);
  const isLogin = !isError && data?.result;
  const commonStyles = 'underline text-pink_500 text-size16 font-semiBold text-nowrap';

  return (
    <div className='w-[11rem] h-[2.4rem] mr-[4%] flex gap-[2rem] items-center justify-center'>
      {isLogin && (
        <Button
          disabled={isFetching}
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
      {!isLogin ? (
        <Link
          className={commonStyles}
          href='/login'
          scroll={false}
        >
          로그인
        </Link>
      ) : (
        <button
          className={twJoin(commonStyles, 'mt-[0.4rem]')}
          type='button'
          onClick={() => mutate()}
          disabled={isFetching}
        >
          로그아웃
        </button>
      )}
    </div>
  );
};

export default HeaderUserInfo;
