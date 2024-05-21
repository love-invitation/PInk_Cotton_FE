import { DotIconProps } from './DotIcon.type';

const DotIcon = ({ size = '0.5rem', fill = 'black', className = '', ...rest }: DotIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 5 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <circle
        cx='2.5'
        cy='2.5'
        r='2.5'
        fill={fill}
      />
    </svg>
  );
};

export default DotIcon;
