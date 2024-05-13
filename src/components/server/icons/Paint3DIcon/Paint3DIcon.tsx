import { Paint3DIconProps } from './Paint3DIcon.type';

const Paint3DIcon = ({ size = 32, className, ...rest }: Paint3DIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
      {...rest}
    >
      <rect
        width='80'
        height='80'
        fill='url(#pattern0_373_1048)'
      />
      <defs>
        <pattern
          id='pattern0_373_1048'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_373_1048'
            transform='scale(0.000666667)'
          />
        </pattern>
        <image
          id='image0_373_1048'
          width='1500'
          height='1500'
        />
      </defs>
    </svg>
  );
};

export default Paint3DIcon;