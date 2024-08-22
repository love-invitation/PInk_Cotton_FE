import { NaverLogIconProps } from '../NaverLogoIcon/NaverLogoIcon.type';

const NaverMapLogoIcon = ({ size = '3.2rem', ...rest }: NaverLogIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...rest}
    >
      <rect
        x='0.219727'
        y='0.0200195'
        width='17'
        height='17'
        fill='url(#pattern0_373_4150)'
      />
      <defs>
        <pattern
          id='pattern0_373_4150'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_373_4150'
            transform='scale(0.0294118)'
          />
        </pattern>
        <image
          id='image0_373_4150'
          width='34'
          height='34'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDQtMThUMDY6MjE6NTkrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA0LTE4VDA2OjI1OjEyKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA0LTE4VDA2OjI1OjEyKzA5OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxZTY1ODc2LTc3YzMtMDI0OS05YTYyLTc3ZmFlNGQyYTA3NSIgeG1w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'
        />
      </defs>
    </svg>
  );
};

export default NaverMapLogoIcon;