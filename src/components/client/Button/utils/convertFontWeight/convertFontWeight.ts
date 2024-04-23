import { ButtonFontWeightType } from '../../Button.type';

const convertFontWeight = (fontWeightValue: ButtonFontWeightType) => {
  switch (fontWeightValue) {
    case 'regular':
      return 'font-regular';

    case 'semiBold':
      return 'font-semiBold';

    case 'bold':
      return 'font-bold';

    case 'extraBold':
      return 'font-extraBold';

    default:
      return 'font-semiBold';
  }
};

export default convertFontWeight;
