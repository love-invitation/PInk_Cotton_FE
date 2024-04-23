import { ErrorMessageProps } from './ErrorMessage.type';

import { twMerge } from 'tailwind-merge';

const ErrorMessage = ({ children, className, ...rest }: ErrorMessageProps) => {
  return (
    <p
      className={twMerge('text-red_500 shrink-0 text-[1.6rem] font-medium', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export default ErrorMessage;
