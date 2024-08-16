import { InvitationGalleryItem } from '@/types/response';

export interface GalleryModalProps {
  isShow: boolean;
  onClose: () => void;
  viewNumber: number;
  galleryList: InvitationGalleryItem[];
}
