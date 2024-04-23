import {
  convertBackgroundColor,
  convertFontColor,
  convertFontSize,
  convertFontWeight,
  convertRadius,
} from '../../utils';
import { UseConvertButtonStyleProps } from './useConvertButtonStyle.type';

import { twJoin } from 'tailwind-merge';

const useConvertButtonStyle = ({
  radius,
  fontSize,
  fontWeight,
  fontColor,
  backgroundColor,
}: UseConvertButtonStyleProps) => {
  return twJoin(
    convertRadius(radius),
    convertFontSize(fontSize),
    convertFontWeight(fontWeight),
    convertFontColor(fontColor),
    convertBackgroundColor(backgroundColor),
  );
};

export default useConvertButtonStyle;
