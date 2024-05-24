import { InvitationsItem, InvitationsResponse } from '@/types/response';

export interface TemplateProps
  extends Pick<InvitationsResponse['result'], 'title' | 'details' | 'groomName' | 'brideName'> {
  productItem: Pick<InvitationsItem, 'id' | 'imageUrl'>;
}
