import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';

const HeaderNoneResponsive = () => {
  return (
    <header className='w-full h-[9rem] hidden items-center justify-between shadow-shadow_500 header_min:flex'>
      <HeaderLogo />
      <HeaderNavbar />
      <HeaderUserInfo />
    </header>
  );
};

export default HeaderNoneResponsive;
