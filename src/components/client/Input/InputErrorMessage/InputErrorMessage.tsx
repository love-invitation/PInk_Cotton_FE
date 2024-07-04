import { InputErrorMessageProps } from './InputErrorMessage.type';

import { twJoin, twMerge } from 'tailwind-merge';

const InputErrorMessage = ({ children, className, ...rest }: InputErrorMessageProps) => {
  return (
    <p
      className={twMerge(
        twJoin(
          'text-red_500 shrink-0 text-[1.3rem] font-medium overflow-hidden text-ellipsis whitespace-nowrap',
          children && 'visible',
          !children && 'invisible',
        ),
        className,
      )}
      {...rest}
    >
      {children || '에러 없음'}
    </p>
  );
};

export default InputErrorMessage;
