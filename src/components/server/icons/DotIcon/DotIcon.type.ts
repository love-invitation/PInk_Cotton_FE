import { SVGProps } from 'react';

export interface DotIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  fill?: string;
  className?: string;
}
