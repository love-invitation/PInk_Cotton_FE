import { DividerProps } from './Divider.type';

import { twJoin, twMerge } from 'tailwind-merge';

const Divider = ({ direction = 'horizontal', className, ...rest }: DividerProps) => {
  const baseStyle = twJoin(
    'border-none bg-gray_900',
    direction === 'horizontal' && 'block h-px w-full',
    direction === 'vertical' && 'inline-block w-px h-full align-middle mx-[1rem]',
  );
  const style = twMerge(baseStyle, className);

  return (
    <hr
      className={style}
      {...rest}
    />
  );
};

export default Divider;
