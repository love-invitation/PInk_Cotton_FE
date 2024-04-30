import style from './HeaderLogo.style.module.css';

import { Logo } from '@/components/server/';

const HeaderLogo = () => {
  return (
    <div className={`ml-[4%] flex items-center justify-center relative ${style.header_logo}`}>
      <Logo />
    </div>
  );
};

export default HeaderLogo;
