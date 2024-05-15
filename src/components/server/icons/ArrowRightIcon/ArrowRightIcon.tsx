import { ArrowRightIconProps } from './ArrowRightIcon.type';

import { twMerge } from 'tailwind-merge';

const ArrowRightIcon = ({ size = 32, className, fill = 'black', ...rest }: ArrowRightIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 15 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge('flex items-center justify-center', className)}
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 6.33101C0 6.09119 0.0982978 5.86118 0.273269 5.6916C0.44824 5.52202 0.685551 5.42675 0.932997 5.42675H11.7427L7.73641 1.54563C7.56122 1.37583 7.4628 1.14554 7.4628 0.90541C7.4628 0.66528 7.56122 0.434986 7.73641 0.265188C7.9116 0.0953913 8.14921 0 8.39697 0C8.64473 0 8.88234 0.0953913 9.05754 0.265188L14.6555 5.69079C14.7424 5.77479 14.8113 5.87458 14.8584 5.98444C14.9054 6.0943 14.9296 6.21207 14.9296 6.33101C14.9296 6.44995 14.9054 6.56773 14.8584 6.67759C14.8113 6.78745 14.7424 6.88724 14.6555 6.97123L9.05754 12.3968C8.88234 12.5666 8.64473 12.662 8.39697 12.662C8.14921 12.662 7.9116 12.5666 7.73641 12.3968C7.56122 12.227 7.4628 11.9967 7.4628 11.7566C7.4628 11.5165 7.56122 11.2862 7.73641 11.1164L11.7427 7.23528H0.932997C0.685551 7.23528 0.44824 7.14001 0.273269 6.97043C0.0982978 6.80084 0 6.57084 0 6.33101Z'
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRightIcon;
