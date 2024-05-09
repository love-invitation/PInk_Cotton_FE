import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/assets/images/logo.png';
import { DOMAIN_URL } from '@/constants';

import { LogoProps } from './Logo.type';

const Logo = ({ ...rest }: LogoProps) => {
  return (
    <Link href={DOMAIN_URL.MAIN}>
      <Image
        fill
        {...rest}
        src={LogoImage}
        alt='웹 사이트 로고'
      />
    </Link>
  );
};

export default Logo;
