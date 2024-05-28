import { InvitationResponse, InvitationsItem } from '@/types/response';

export interface InvitationTemplateProps
  extends Pick<InvitationResponse['result'], 'title' | 'details' | 'groomName' | 'brideName'> {
  productInfo: Pick<InvitationsItem, 'id' | 'imageUrl' | 'templateName'>;
  width: number;
  height: number;
}
