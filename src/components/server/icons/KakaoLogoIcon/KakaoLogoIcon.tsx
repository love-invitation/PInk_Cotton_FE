import { KakaoLogoIconProps } from './KakaoLogoIcon.type';

const KakaoLogoIcon = ({
  size = '3.2rem',
  fill = 'black',
  className,
  ...rest
}: KakaoLogoIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2.97348C6.47688 2.97348 2.00002 6.45058 2.00002 10.739C2.00002 13.4061 3.73158 15.7573 6.36838 17.1557L5.25894 21.2299C5.16092 21.5899 5.57048 21.8769 5.88498 21.6682L10.7482 18.4416C11.1586 18.4814 11.5757 18.5047 12 18.5047C17.5228 18.5047 21.9999 15.0277 21.9999 10.739C21.9999 6.45058 17.5228 2.97348 12 2.97348Z'
        fill={fill}
      />
    </svg>
  );
};

export default KakaoLogoIcon;
