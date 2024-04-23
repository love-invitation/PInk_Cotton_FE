import {
  ButtonBackgroundColorType,
  ButtonFontColorType,
  ButtonFontSizeType,
  ButtonFontWeightType,
  ButtonRadiusType,
} from '../../Button.type';

export interface UseConvertButtonStyleProps {
  radius: ButtonRadiusType;

  fontSize: ButtonFontSizeType;
  fontWeight: ButtonFontWeightType;
  fontColor: ButtonFontColorType;

  backgroundColor: ButtonBackgroundColorType;
}
