import { SVGProps } from 'react';

export interface UserIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  fill?: string;
  className?: string;
}
