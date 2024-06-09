import React from 'react';

import { DeleteIconProps } from './DeleteIcon.type';

const DeleteIcon = ({
  size = '3.2rem',
  fill = 'black',
  className = '',
  ...rest
}: DeleteIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 -960 960 960'
      fill={fill}
      className={className}
      {...rest}
    >
      <path d='M273.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-507h-53v-106H347v-53h264.87v53h233.35v106h-53v507q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H273.78Zm412.44-613H273.78v507h412.44v-507ZM349.83-280.57h93v-360h-93v360Zm167.34 0h93v-360h-93v360ZM273.78-713.78v507-507Z' />
    </svg>
  );
};

export default DeleteIcon;
