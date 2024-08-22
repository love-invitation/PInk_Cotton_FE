import { CopyIconProps } from './CopyIcon.type';

const CopyIcon = ({ size = '3.2rem', fill = 'black', ...rest }: CopyIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M14.167 11.1666V13.6666C14.167 16.9999 12.8337 18.3333 9.50033 18.3333H6.33366C3.00033 18.3333 1.66699 16.9999 1.66699 13.6666V10.4999C1.66699 7.16659 3.00033 5.83325 6.33366 5.83325H8.83366'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.1663 11.1666H11.4997C9.49967 11.1666 8.83301 10.4999 8.83301 8.49992V5.83325L14.1663 11.1666Z'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.66699 1.66675H13.0003'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.83301 4.16675C5.83301 2.78341 6.94967 1.66675 8.33301 1.66675H10.5163'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.3329 6.66675V11.8251C18.3329 13.1167 17.2829 14.1667 15.9912 14.1667'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.333 6.66675H15.833C13.958 6.66675 13.333 6.04175 13.333 4.16675V1.66675L18.333 6.66675Z'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CopyIcon;
