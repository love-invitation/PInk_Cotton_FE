import { TMapLogoIconProps } from './TMapLogoIcon.type';

const TMapLogoIcon = ({ size = '3.2rem', ...rest }: TMapLogoIconProps) => {
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
        x='0.0800781'
        y='0.0200195'
        width='17'
        height='17'
        fill='url(#pattern0_373_4153)'
      />
      <defs>
        <pattern
          id='pattern0_373_4153'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_373_4153'
            transform='scale(0.0294118)'
          />
        </pattern>
        <image
          id='image0_373_4153'
          width='34'
          height='34'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDQtMThUMDY6MjE6MzgrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA0LTE4VDA2OjI0OjU4KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA0LTE4VDA2OjI0OjU4KzA5OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwOWVhNDg5LWM2MjAtN2M0Mi1iMzVlLWQ1ZmFmMmY5NzEyNCIgeG1w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'
        />
      </defs>
    </svg>
  );
};

export default TMapLogoIcon;
