import { Button } from '@/components/client';
import { UserIcon } from '@/components/server/icons';

import tailwindConfig from '../../../../../../tailwind.config';

import resolveConfig from 'tailwindcss/resolveConfig';

const HeaderUserInfo = () => {
  const { theme } = resolveConfig(tailwindConfig);
  // TODO
  // 추후 로그인 기능 제작시 store값으로 변경
  const isLogin = true;

  return (
    <div className='w-[12rem] h-[2.8rem] flex justify-center items-center mr-[4%]'>
      {isLogin && (
        <Button
          backgroundColor='naked'
          fontSize='1.8rem'
          fontWeight='regular'
          className='w-full h-full rounded-none text-gray_100 flex items-center justify-between text-nowrap'
        >
          <UserIcon
            size={28}
            fill={theme.colors.gray_100}
          />
          마이페이지
        </Button>
      )}
      {!isLogin && (
        <Button
          fontSize='1.8rem'
          fontWeight='semiBold'
          backgroundColor='naked'
          className='underline text-pink_500'
        >
          로그인
        </Button>
      )}
    </div>
  );
};

export default HeaderUserInfo;
