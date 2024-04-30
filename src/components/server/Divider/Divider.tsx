import { DividerProps } from './Divider.type';

import { twJoin, twMerge } from 'tailwind-merge';

const Divider = ({ direction = 'horizontal', className, ...rest }: DividerProps) => {
  return (
    <hr
      className={twMerge(
        twJoin(
          'border-none bg-gray_800',
          direction === 'horizontal' && 'block h-px w-full',
          direction === 'vertical' && 'inline-block w-px h-full align-middle mx-[1rem]',
        ),
        className,
      )}
      {...rest}
    />
  );
};

export default Divider;
