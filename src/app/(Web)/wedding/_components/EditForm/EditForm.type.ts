import { InvitationResponse } from '@/types/response';

export interface EditFormProps {
  invitation: InvitationResponse;
  coverImageFile: Blob;
  thumbnailImageFile: Blob;
  galleryImageFiles: Blob[];
}
