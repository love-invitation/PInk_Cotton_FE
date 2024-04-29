import { SVGProps } from 'react';

export interface StarIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  fill?: string;
  className?: string;
}
