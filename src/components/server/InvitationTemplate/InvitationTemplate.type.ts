import { InvitationItem, InvitationResponse } from '@/types/response';

export interface InvitationTemplateProps
  extends Pick<InvitationResponse['result'], 'title' | 'details' | 'groomName' | 'brideName'> {
  productInfo: Pick<InvitationItem, 'id' | 'imageUrl' | 'templateName'>;
  width: number;
  height: number;
}
