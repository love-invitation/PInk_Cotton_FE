import style from './HeaderNoneResponsive.style.module.css';

import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';

const HeaderNoneResponsive = () => {
  return (
    <header
      className={`w-full h-[8.8rem] hidden items-center justify-between shadow-shadow_500 ${style.header_full_wide}`}
    >
      <HeaderLogo />
      <HeaderNavbar />
      <HeaderUserInfo />
    </header>
  );
};

export default HeaderNoneResponsive;
