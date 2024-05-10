import { BannerProps } from './Banner.type';

import { twMerge } from 'tailwind-merge';

const Banner = ({ children, className }: BannerProps) => {
  return <section className={twMerge('relative', className)}>{children}</section>;
};

export default Banner;
