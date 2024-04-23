import { ButtonBorderType } from '../../Button.type';

const convertBorder = (border: ButtonBorderType) => {
  switch (border) {
    case 'gray':
      return 'border-[0.1rem] border-gray_500';

    case 'pink':
      return 'border-[0.1rem] border-pink_500';

    case 'none':
      return '';

    default:
      return '';
  }
};

export default convertBorder;
