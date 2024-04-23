import { useMemo } from 'react';

import { ButtonRadiusType } from '../../Button.type';
import { UseConvertButtonStyleProps } from './useConvertButtonStyle.type';

import { twJoin } from 'tailwind-merge';

const useConvertButtonStyle = ({ radius }: UseConvertButtonStyleProps) => {
  const convertRadius = (radiusValue: ButtonRadiusType) => {
    switch (radiusValue) {
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

  const radiusStyle = useMemo(() => convertRadius(radius), [radius]);

  return twJoin(radiusStyle);
};

export default useConvertButtonStyle;
