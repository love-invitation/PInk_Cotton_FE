import { LabelProps } from './Label.type';

import { twMerge } from 'tailwind-merge';

const Label = ({ children, className, ...rest }: LabelProps) => {
  return (
    <label
      className={twMerge(
        'shrink-0 select-none text-[1.7rem] font-semibold text-gray_300',
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
