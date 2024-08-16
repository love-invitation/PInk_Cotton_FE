import React from 'react';

import { BracketLeftIconProps } from './BracketLeftIcon.type';

const BracketLeftIcon = ({ size = '3.2rem', fill = 'black', ...rest }: BracketLeftIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill={fill}
      {...rest}
    >
      <path d='M432-48 0-480l432-432 103 103-329 329 329 329L432-48Z' />
    </svg>
  );
};

export default BracketLeftIcon;
