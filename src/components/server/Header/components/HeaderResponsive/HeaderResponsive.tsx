import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo';

const HeaderResponsive = () => {
  return (
    <header className='hidden flex-col shadow-shadow_500 header_max:flex'>
      <div className='w-full h-[4.8rem] flex justify-between items-center'>
        <HeaderLogo />
        <HeaderUserInfo />
      </div>
      <div className='w-full h-[4.2rem]'>
        <HeaderNavbar />
      </div>
    </header>
  );
};

export default HeaderResponsive;
