import { ImageProps } from 'next/image';

export interface UploadImageItemProps extends Omit<ImageProps, 'src'> {
  image: File;
}
