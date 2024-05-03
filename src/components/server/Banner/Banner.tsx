import { BannerProps } from './Banner.type';

import { twMerge } from 'tailwind-merge';

const Banner = ({ children, className }: BannerProps) => {
  return <section className={twMerge('relative h-[26.7rem]', className)}>{children}</section>;
};

export default Banner;
