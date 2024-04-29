import { UserIconProps } from './UserIcon.type';

const UserIcon = ({ size = 32, fill = 'black', className = '', ...rest }: UserIconProps) => {
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
        d='M23.0147 23.8548C22.4829 22.3663 21.3111 21.0511 19.6811 20.113C18.0511 19.175 16.0539 18.6665 13.9994 18.6665C11.9448 18.6665 9.94759 19.175 8.31758 20.113C6.68756 21.0511 5.51581 22.3663 4.98404 23.8548'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <ellipse
        cx='14.0007'
        cy='9.33317'
        rx='4.66667'
        ry='4.66667'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default UserIcon;
