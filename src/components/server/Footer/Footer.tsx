import Divider from '../Divider/Divider';
import { FooterInfo, FooterNavigator } from './components';

const Footer = () => {
  return (
    <footer className='w-full h-[20rem] flex justify-center shadow-shadow_500 absolute bottom-0'>
      <div className='w-full max-w-[100rem] min-w-[27rem] h-full flex flex-col justify-center gap-[1rem] text-nowrap'>
        <FooterNavigator />
        <Divider />
        <FooterInfo />
      </div>
    </footer>
  );
};

export default Footer;
