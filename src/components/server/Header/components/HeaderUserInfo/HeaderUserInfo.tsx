import style from './HeaderUserInfo.style.module.css';

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
          className={`rounded-none text-gray_100 flex items-center px-0 ${style.userinfo_login_button}`}
        >
          <UserIcon
            size={24}
            fill={theme.colors.gray_100}
            className={style.userinfo_login_icon}
          />
          <span className={`hidden ${style.userinfo_login_title}`}>마이페이지</span>
        </Button>
      )}
      {!isLogin && (
        <Button
          fontSize='1.8rem'
          fontWeight='semiBold'
          backgroundColor='naked'
          className={`underline text-pink_500 ${style.userinfo_logout_button}`}
        >
          로그인
        </Button>
      )}
    </div>
  );
};

export default HeaderUserInfo;
