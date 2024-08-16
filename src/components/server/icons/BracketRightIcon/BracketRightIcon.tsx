import { BracketRightIconProps } from './BracketRightIcon.type';

const BracketRightIcon = ({ size = '3.2rem', fill = 'black', ...rest }: BracketRightIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill={fill}
      {...rest}
    >
      <path d='M321-48 218-151l329-329-329-329 103-103 432 432L321-48Z' />
    </svg>
  );
};

export default BracketRightIcon;
