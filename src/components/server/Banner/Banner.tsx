import { BannerProps } from './Banner.type';

import { twMerge } from 'tailwind-merge';

const Banner = ({ children, className }: BannerProps) => {
  return (
    <section className={twMerge('relative pointer-events-none select-none', className)}>
      {children}
    </section>
  );
};

export default Banner;
