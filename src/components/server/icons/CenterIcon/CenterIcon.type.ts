import { SVGProps } from 'react';

export interface CenterProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  fill?: string;
  className?: string;
}
