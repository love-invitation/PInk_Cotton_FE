import { ImageProps } from 'next/image';

export interface UploadImageListViewProps extends Omit<ImageProps, 'src'> {
  ulClassName?: string;
  liClassName?: string;
}
