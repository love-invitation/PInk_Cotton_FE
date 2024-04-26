import Divider from '../Divider/Divider';
import { FooterInfo, FooterNavigator } from './components';

const Footer = () => {
  return (
    <footer className='w-full h-[20rem] flex justify-center'>
      <div className='w-full max-w-[100rem] min-w-[27rem] h-full flex flex-col justify-center'>
        <FooterNavigator />
        <Divider />
        <FooterInfo />
      </div>
    </footer>
  );
};

export default Footer;
