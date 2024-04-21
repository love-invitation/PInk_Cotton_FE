import { AlertSubMessageType } from '../AlertModal.type';

const convertSubMessageColor = (type: AlertSubMessageType) => {
  switch (type) {
    case 'basic':
      return 'text-gray_300';

    case 'safe':
      return 'text-green_100';

    case 'warning':
      return 'text-yellow_500';

    case 'danger':
      return 'text-red_500';

    default:
      return 'text-gray_300';
  }
};

export default convertSubMessageColor;
