'use client';

import Link from 'next/link';

import { UserIcon } from '@/components/server/icons';
import { DOMAIN_URL, MUTATE_OPTIONS, QUERY_KEYS, QUERY_OPTIONS } from '@/constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import tailwindConfig from '../../../../../../tailwind.config';

import { twJoin } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

const HeaderUserInfo = () => {
  const queryClient = useQueryClient();
  const { data, isError, isFetching } = useQuery(QUERY_OPTIONS.AUTH_USER());
  const { mutate } = useMutation({
    ...MUTATE_OPTIONS.LOGOUT(),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AUTH_USER,
      });
    },
  });
  const { theme } = resolveConfig(tailwindConfig);
  const isLogin = !isError && data?.result;
  const commonStyles = 'underline text-pink_500 text-size16 font-semiBold text-nowrap';

  return (
    <div className='w-[11rem] h-[2.4rem] mr-[4%] flex gap-[2rem] items-center justify-center'>
      {isLogin && (
        <Link
          href={DOMAIN_URL.PROFILE}
          className='text-size18 font-medium rounded-none text-gray_100 flex items-center px-0 header_min:w-full header_min:h-full header_min:text-nowrap header_min:justify-around header_max:w-[2.4rem] header_max:h-[2.4rem] header_max:justify-center'
        >
          <UserIcon
            size='2.4rem'
            fill={theme.colors.gray_100}
            className='header_max:w-[2.4rem] header_max:h-[2.4rem]'
          />
          <span className='hidden header_min:block'>마이페이지</span>
        </Link>
      )}
      {!isLogin ? (
        <Link
          className={commonStyles}
          href={DOMAIN_URL.LOGIN}
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
