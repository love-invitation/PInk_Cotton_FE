import { InputErrorMessageProps } from './InputErrorMessage.type';

import { twMerge } from 'tailwind-merge';

const InputErrorMessage = ({ children, className, ...rest }: InputErrorMessageProps) => {
  return (
    <p
      className={twMerge('text-red_500 shrink-0 text-[1.3rem] font-medium', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export default InputErrorMessage;
