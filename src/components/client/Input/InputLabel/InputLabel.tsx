import { InputLabelProps } from './InputLabel.type';

import { twMerge } from 'tailwind-merge';

const InputLabel = ({ children, className, ...rest }: InputLabelProps) => {
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

export default InputLabel;
