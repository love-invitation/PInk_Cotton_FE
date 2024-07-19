import { SMSIconProps } from './SMSIcon.type';

const SMSIcon = ({ size = '3.2rem', fill = '#BABABA', className, ...rest }: SMSIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d='M19.5 23H8.5C5.2 23 3 21.5 3 18V11C3 7.5 5.2 6 8.5 6H19.5C22.8 6 25 7.5 25 11V18C25 21.5 22.8 23 19.5 23Z'
        fill={fill}
        stroke={fill}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 10L16.244 13.2103C15.008 14.2632 12.98 14.2632 11.744 13.2103L8 10'
        stroke='white'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SMSIcon;
