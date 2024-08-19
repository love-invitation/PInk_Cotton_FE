import { GalleryDetail } from '@/types/response';

export interface GalleryModalProps {
  isShow: boolean;
  onClose: () => void;
  viewNumber: number;
  galleryList: GalleryDetail[];
}
