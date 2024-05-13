import { Clock3DIconProps } from './Clock3DIcon.type';

const Clock3DIcon = ({ size = 32, className = '', ...rest }: Clock3DIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 80 80'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
      {...rest}
    >
      <rect
        width='80'
        height='80'
        fill='url(#pattern0_373_1033)'
      />
      <defs>
        <pattern
          id='pattern0_373_1033'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_373_1033'
            transform='scale(0.000666667)'
          />
        </pattern>
        <image
          id='image0_373_1033'
          width='1500'
          height='1500'
        />
      </defs>
    </svg>
  );
};

export default Clock3DIcon;