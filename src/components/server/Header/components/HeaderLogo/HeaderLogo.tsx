import { Logo } from '@/components/server/';

const HeaderLogo = () => {
  return (
    <div className='ml-[4%] flex items-center justify-center relative header_min:w-[28.5rem] header_min:h-[5rem] header_max:w-[16.8rem] header_max:h-[3rem]'>
      <Logo />
    </div>
  );
};

export default HeaderLogo;
