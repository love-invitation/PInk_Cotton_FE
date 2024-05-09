import { MockupIconProps } from '../MockupIcon.type';

const PhoneCameraIcon = ({ className }: MockupIconProps) => {
  return (
    <svg
      width='13'
      height='12'
      viewBox='0 0 13 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.76591 11.8846C10.0561 11.8846 12.7234 9.35328 12.7234 6.23075C12.7234 3.10822 10.0561 0.576904 6.76591 0.576904C3.47571 0.576904 0.808472 3.10822 0.808472 6.23075C0.808472 9.35328 3.47571 11.8846 6.76591 11.8846Z'
        fill='#262C2D'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.76588 9.76439C8.82226 9.76439 10.4893 8.18232 10.4893 6.23074C10.4893 4.27915 8.82226 2.69708 6.76588 2.69708C4.7095 2.69708 3.04248 4.27915 3.04248 6.23074C3.04248 8.18232 4.7095 9.76439 6.76588 9.76439Z'
        fill='#121515'
      />
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.76592 5.524C7.1772 5.524 7.5106 5.20758 7.5106 4.81727C7.5106 4.42695 7.1772 4.11053 6.76592 4.11053C6.35464 4.11053 6.02124 4.42695 6.02124 4.81727C6.02124 5.20758 6.35464 5.524 6.76592 5.524Z'
        fill='#636F73'
      />
    </svg>
  );
};

export default PhoneCameraIcon;
