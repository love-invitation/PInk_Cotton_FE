import { SVGProps } from 'react';

export interface ImageIconProps extends SVGProps<SVGSVGElement> {
  size?: string;
  fill?: string;
  className?: string;
}
