import { HeaderLogo, HeaderNavbar, HeaderUserInfo } from './components';

const Header = () => {
  return (
    <header className='w-full h-[8.8rem] flex items-center justify-between shadow-shadow_500'>
      <HeaderLogo />
      <HeaderNavbar />
      <HeaderUserInfo />
    </header>
  );
};

export default Header;
