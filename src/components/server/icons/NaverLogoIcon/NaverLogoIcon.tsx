import { NaverLogIconProps } from './NaverLogoIcon.type';

const NaverLogoIcon = ({
  size = '3.2rem',
  className,
  fill = 'black',
  ...rest
}: NaverLogIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.561 0.00104645V10.704L6.14604 0.00104645H0V20H6.43896V9.29602L13.8529 19.9989H20V0H13.561V0.00104645Z'
        fill={fill}
      />
    </svg>
  );
};

export default NaverLogoIcon;
