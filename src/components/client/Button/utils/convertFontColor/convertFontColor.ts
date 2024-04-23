import { ButtonFontColorType } from '../../Button.type';

const convertFontColor = (fontColorValue: ButtonFontColorType) => {
  switch (fontColorValue) {
    case 'white':
      return 'text-white_100';

    case 'black':
      return 'text-black_900';

    case 'gray':
      return 'text-gray_400';

    case 'brown':
      return 'text-brown_500';

    default:
      return 'text-white_100';
  }
};

export default convertFontColor;
