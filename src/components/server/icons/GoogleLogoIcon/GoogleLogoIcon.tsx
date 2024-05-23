import { GoogleLogoIconProps } from './GoogleLogoIcon.type';

const GoogleLogoIcon = ({ size = '3.2rem', className, ...rest }: GoogleLogoIconProps) => {
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
        d='M22 12.2273C22 11.5182 21.9351 10.8364 21.8145 10.1819H12.2041V14.0501H17.6958C17.4592 15.3001 16.7403 16.3592 15.6596 17.0682V19.5773H18.9573C20.8868 17.8364 22 15.2728 22 12.2273Z'
        fill='#4285F4'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.2041 22C14.9592 22 17.269 21.1046 18.9573 19.5773L15.6595 17.0682C14.7458 17.6682 13.577 18.0228 12.2041 18.0228C9.54637 18.0228 7.29683 16.2637 6.49442 13.9H3.08533V16.4909C4.76436 19.7591 8.2152 22 12.2041 22Z'
        fill='#34A853'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.49443 13.9C6.29035 13.3 6.1744 12.6591 6.1744 12C6.1744 11.3409 6.29035 10.7 6.49443 10.1V7.50909H3.08534C2.39425 8.85909 2 10.3864 2 12C2 13.6136 2.39425 15.1409 3.08534 16.4909L6.49443 13.9Z'
        fill='#FBBC05'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.2041 5.97727C13.7022 5.97727 15.0473 6.48182 16.1048 7.47273L19.0315 4.60455C17.2644 2.99091 14.9545 2 12.2041 2C8.2152 2 4.76436 4.24091 3.08533 7.50909L6.49442 10.1C7.29683 7.73636 9.54637 5.97727 12.2041 5.97727Z'
        fill='#EA4335'
      />
    </svg>
  );
};

export default GoogleLogoIcon;
