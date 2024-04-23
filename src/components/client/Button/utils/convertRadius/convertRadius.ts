import { ButtonRadiusType } from '../../Button.type';

const convertRadius = (radius: ButtonRadiusType) => {
  switch (radius) {
    case '0.4rem':
      return 'rounded-[0.4rem]';

    case '0.8rem':
      return 'rounded-[0.8rem]';

    case '1.4rem':
      return 'rounded-[1.4rem]';

    case 'rounded':
      return 'rounded-[999rem]';

    default:
      return 'rounded-[0.4rem]';
  }
};

export default convertRadius;
