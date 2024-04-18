import { GeoPosition } from '@/types/originType';

export interface PinkMapProps {
  center: GeoPosition;

  width?: number | string;
  height?: number | string;
}
