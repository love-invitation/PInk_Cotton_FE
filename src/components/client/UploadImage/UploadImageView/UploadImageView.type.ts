import { ImageProps } from 'next/image';

export interface UploadImageViewProps extends Omit<ImageProps, 'src'> {
  className?: string;
}
