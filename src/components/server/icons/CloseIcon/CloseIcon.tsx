import { CloseIconProps } from './CloseIcon.type';

const CloseIcon = ({ size = 32, fill = 'black' }: CloseIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      viewBox='0 -960 960 960'
      width={size}
      fill={fill}
    >
      <path d='m249-183-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z' />
    </svg>
  );
};

export default CloseIcon;
