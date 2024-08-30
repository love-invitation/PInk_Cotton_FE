import { DotColumIconProps } from './DotColumIcon.type';

const DotColumIcon = ({ size = '3.2rem', fill = 'black', ...rest }: DotColumIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <circle
        cx='10'
        cy='5'
        r='1'
        fill={fill}
      />
      <circle
        cx='10'
        cy='10'
        r='1'
        fill={fill}
      />
      <circle
        cx='10'
        cy='15'
        r='1'
        fill={fill}
      />
    </svg>
  );
};

export default DotColumIcon;
