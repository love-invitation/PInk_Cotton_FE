import { InvitationItem } from '@/types/response';

export interface InvitationsListProps {
  productInfoList: InvitationItem[];
  groom: string;
  bride: string;
  detail: string;
}
