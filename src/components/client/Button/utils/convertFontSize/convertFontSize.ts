import { ButtonFontSizeType } from '../../Button.type';

const convertFontSize = (fontSizeValue: ButtonFontSizeType) => {
  switch (fontSizeValue) {
    case '1.4rem':
      return 'text-[1.4rem]';

    case '1.8rem':
      return 'text-[1.8rem]';

    case '2rem':
      return 'text-[2rem]';

    default:
      return 'text-[1.4rem]';
  }
};

export default convertFontSize;
