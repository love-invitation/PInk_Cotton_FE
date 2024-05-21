import { MockupIconProps } from '../MockupIcon.type';

const PhoneSpeakerIcon = ({ className }: MockupIconProps) => {
  return (
    <svg
      width='3.8rem'
      height='0.6rem'
      viewBox='0 0 38 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.702148 3.23076C0.702148 1.89253 1.787 0.807678 3.12523 0.807678H34.8748C36.213 0.807678 37.2979 1.89253 37.2979 3.23076V3.23076C37.2979 4.56898 36.213 5.65383 34.8748 5.65383H3.12523C1.787 5.65383 0.702148 4.56898 0.702148 3.23076V3.23076Z'
        fill='#262C2D'
      />
    </svg>
  );
};

export default PhoneSpeakerIcon;
