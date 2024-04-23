import { ButtonBackgroundColorType } from '../../Button.type';

const convertBackgroundColor = (colorValue: ButtonBackgroundColorType) => {
  switch (colorValue) {
    case 'white':
      return 'bg-white_100';

    case 'black':
      return 'bg-black_900';

    case 'pink':
      return 'bg-pink_500';

    case 'brown':
      return 'bg-brown_100';

    case 'naked':
      return '';

    default:
      return 'bg-pink_500';
  }
};

export default convertBackgroundColor;
